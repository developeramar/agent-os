const User =
require("../models/User");

exports.getProfile =
async (req, res) => {

    try {

        const user =
            await User.findById(
                req.user.userId
            ).select(
                "-password -googleRefreshToken"
            );

        if (!user) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found"

            });

        }

        return res.status(200).json({

            success: true,

            user: {

                id:
                    user._id,

                name:
                    user.name,

                email:
                    user.email,

                plan:
                    user.plan,

                emailUsage:
                    user.emailUsage,

                emailLimit:
                    user.emailLimit,

                gmailConnected:
                    user.gmailConnected,

                gmailEmail:
                    user.gmailEmail,

                onboardingCompleted:
                    user.onboardingCompleted,

                createdAt:
                    user.createdAt

            }

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

