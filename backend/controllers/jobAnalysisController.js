const { searchGoogle } = require("../agent/browser");
const { analyzeJob } = require("../agent/aiAgent");

exports.analyzeLatestJob = async (req, res) => {
    try {

        const result = await searchGoogle();
        console.log("STEP 1: Browser Finished");

        if (!result.preview) {
            return res.status(404).json({
                success: false,
                message: "No job found"
            });
        }

        const analysis = await analyzeJob(result.preview);
        console.log("STEP 2: Gemini Finished");

        res.status(200).json({
            success: true,
            job: result.firstJob,
            analysis
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};