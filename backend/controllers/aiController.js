const { analyzeJob } = require("../agent/aiAgent");

exports.analyze = async (req, res) => {
    try {

        const { jobText } = req.body;

        const result = await analyzeJob(jobText);

        res.status(200).json({
            success: true,
            analysis: result
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};