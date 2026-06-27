const {
    sendEmail
} = require("../agent/gmailAgent");

//console.log("GMAIL CONTROLLER LOADED");

exports.sendEmail = async (req, res) => {

    try {

        const {
            to,
            subject,
            body
        } = req.body;

        // 👇 JWT se aaya hua logged-in user
        const userId = req.user.userId;

        const result = await sendEmail(
            userId,
            to,
            subject,
            body
        );
        res.status(200).json({

            success: true,
            result

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};