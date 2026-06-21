const {
    getJobDetails
} = require("../agent/jobDetailsAgent");

exports.getDetails = async (req, res) => {

    try {

        const jobUrl = req.query.url;

        const details =
        await getJobDetails(jobUrl);

        res.status(200).json({
            success: true,
            details
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};