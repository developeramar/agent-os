const {
    clickApplyButton
} = require("../agent/applyClickAgent");

exports.clickApply =
async (req, res) => {

    try {

        const jobUrl =
        req.query.url;

        const result =
        await clickApplyButton(
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