const oauth2Client =
require("../config/googleOAuth");

const User =
require("../models/User");

exports.googleLogin =
async (req, res) => {

    try {

        const userId =
            req.query.userId;

        if (!userId) {

            return res.status(400).json({

                success: false,
                message:
                    "User ID required"

            });

        }

        const url =
            oauth2Client.generateAuthUrl({

                access_type:
                    "offline",

                prompt:
                    "consent",

                scope: [

                    "https://www.googleapis.com/auth/gmail.send",

                    "https://www.googleapis.com/auth/gmail.readonly",

                    "https://www.googleapis.com/auth/userinfo.email",

                    "openid"

                ],

                state: userId

            });

        res.redirect(url);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message:
                "Google Login Failed"

        });

    }

};


exports.googleCallback =
async (req, res) => {


    try {

        const { code, state } =
            req.query;

        const userId =
            state;

        if (!userId) {

            return res.status(400).send(
                "Invalid User"
            );

        }

        const {
            tokens
        } =
            await oauth2Client.getToken(
                code
            );

        const user =
            await User.findById(
                userId
            );

        if (!user) {

            return res.status(404).send(
                "User Not Found"
            );

        }

        user.gmailConnected =
            true;

        user.googleRefreshToken =
            tokens.refresh_token || "";

        user.onboardingCompleted =
            true;

        await user.save();

        console.log(
            "GMAIL CONNECTED =>",
            user.email
        );

        return res.redirect(
            "http://localhost:5173/profile"
        );

    } catch (error) {

        console.error(
            "GOOGLE CALLBACK ERROR",
            error
        );

        return res.status(500).send(
            "OAuth Failed"
        );

    }

};

