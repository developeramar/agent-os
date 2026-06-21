const {
getEmails
} = require(
"../agent/gmailReaderAgent"
);

const {
classifyEmail
} = require(
"../agent/emailClassificationAgent"
);

const User =
require(
"../models/User"
);

exports.getInboxSummary =
async (req, res) => {

    try {

        const user =
            await User.findById(
                req.user.userId
            );

        if (!user) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found"

            });

        }

        if (
            !user.gmailConnected
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Please connect Gmail first",

                connectGmail: true

            });

        }

        if (
            user.emailUsage >=
            user.emailLimit
        ) {

            return res.status(403).json({

                success: false,

                message:
                    "Free Limit Reached",

                upgrade: true

            });

        }

        const emails =
            await getEmails(
                req.user.userId
            );

        const analyzedEmails =
            await Promise.all(

                emails.map(
                    async (
                        email
                    ) => {

                        try {

                            const analysis =
                                await classifyEmail(
                                    email
                                );

                            return {

                                ...email,

                                ...analysis

                            };

                        } catch {

                            return {

                                ...email,

                                category:
                                    "General",

                                priority:
                                    "Low",

                                summary:
                                    email.snippet,

                                actions:
                                    [],

                                intent:
                                    "Read Email",

                                cardType:
                                    "Email",

                                recommendedAction:
                                    "Mark Read",

                                requiresReply:
                                    false,

                                interviewDetected:
                                    false,

                                otpDetected:
                                    false,

                                offerDetected:
                                    false,

                                reminderSuggested:
                                    false

                            };

                        }

                    }

                )

            );

        user.emailUsage += 1;

        await user.save();

        return res.json({

            success: true,

            emails:
                analyzedEmails,

            usage:
                user.emailUsage,

            limit:
                user.emailLimit,

            remaining:
                user.emailLimit -
                user.emailUsage

        });

    }

    catch (error) {

        console.error(
            error
        );

        return res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

