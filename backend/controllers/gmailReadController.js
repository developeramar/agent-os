const {
    getEmails
} = require(
    "../agent/gmailReaderAgent"
);

exports.getEmails =
async (req, res) => {

    try {

        const emails =
            await getEmails();

        res.json({

            success: true,

            emails

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};