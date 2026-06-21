const { searchJobs } = require("../agent/jobSearchAgent");

exports.search = async (req, res) => {

    try {

        const query = req.query.q;

        const jobs = await searchJobs(query);

        res.status(200).json({
            success: true,
            total: jobs.length,
            jobs
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};