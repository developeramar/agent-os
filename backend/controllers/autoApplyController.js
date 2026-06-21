const {
    runAutoApply
} = require("../agent/autoApplyAgent");

exports.autoApply = async (
    req,
    res
) => {

    try {

        const result =
            await runAutoApply();

        res.status(200).json({

            success: true,

            totalJobs:
                result.totalJobs,

            jobs:
                result.jobs

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