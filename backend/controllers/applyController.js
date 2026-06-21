const {
    detectApplyButton,
    applyToJob
} = require("../agent/applyAgent");

exports.checkApplyButton =
async (req, res) => {

    try {

        const jobUrl =
            req.query.url;

        const result =
            await detectApplyButton(
                jobUrl
            );

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

exports.applyJob =
async (req, res) => {

    try {

        const jobUrl =
            req.query.url;

        const result =
            await applyToJob(
                jobUrl
            );

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