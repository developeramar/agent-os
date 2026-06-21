const { searchGoogle } = require("../agent/browser");
const { analyzeResume } = require("../agent/resumeAI");
const { matchResumeWithJob } = require("../agent/jobMatchAgent");

exports.matchJob = async (req, res) => {

    try {

        res.status(200).json({
            success: true,
            message:
                "Job Match Engine Connected Successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};