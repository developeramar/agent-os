const {
    sendEmail
} = require(
    "../agent/gmailAgent"
);


console.log(
  "GMAIL CONTROLLER LOADED"
);

exports.sendEmail =
async (req, res) => {

    try {

        const {
            to,
            subject,
            body
        } = req.body;

        const result =
            await sendEmail(
                to,
                subject,
                body
            );

        res.status(200).json({

            success: true,

            result

        });

    } catch (error) {

        console.error(
            error
        );

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};