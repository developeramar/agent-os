const {
    inspectLoginPage
} = require("../agent/loginAgent");

exports.inspectLogin =
async (req, res) => {

    try {

        const url =
            req.query.url;

        const result =
            await inspectLoginPage(url);

        res.status(200).json({
            success: true,
            result
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