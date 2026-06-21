const { searchJobs } = require("../agent/jobSearchAgent");
const { rankJobs } = require("../agent/jobRankingAgent");

exports.rank = async (req, res) => {

    try {

        const query = req.query.q;

        const jobs = await searchJobs(query);

        const ranking = await rankJobs(
            query,
            jobs
        );

        res.status(200).json({
            success: true,
            totalJobs: jobs.length,
            ranking
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};