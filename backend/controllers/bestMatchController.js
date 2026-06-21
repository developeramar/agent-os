const { searchJobs } =
require("../agent/jobSearchAgent");

const { getJobDetails } =
require("../agent/jobDetailsAgent");

const { generateMatchScore } =
require("../agent/matchScoreAgent");

exports.bestMatch = async (req, res) => {

    try {

        const resumeProfile = {
            skills: [
                "Customer Service",
                "CRM Systems",
                "Communication",
                "Problem-solving"
            ]
        };

        const jobs =
        await searchJobs(
            "customer support"
        );

        if (!jobs.length) {

            return res.status(404).json({
                success: false,
                message: "No jobs found"
            });

        }

        const firstJob = jobs[0];

        const details =
        await getJobDetails(
            firstJob.url
        );

        const score =
        await generateMatchScore(
            resumeProfile,
            details.description
        );

        const cleanScore = score
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        res.status(200).json({
            success: true,
            job: firstJob,
            match: JSON.parse(cleanScore)
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};