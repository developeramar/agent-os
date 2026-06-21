const { searchJobs } =
    require("./jobSearchAgent");

const { getJobDetails } =
    require("./jobDetailsAgent");

const { generateMatchScore } =
    require("./matchScoreAgent");

async function getTopMatches(
    resumeProfile,
    searchQuery
) {

    const jobs =
        await searchJobs(
            searchQuery
        );

    const topJobs =
        jobs.slice(0, 3);

    const results = [];

    for (const job of topJobs) {

        try {

            console.log(
                "Checking:",
                job.title
            );

            const details =
                await getJobDetails(
                    job.url
                );

            const scoreText =
                await generateMatchScore(
                    resumeProfile,
                    details.description
                );

            const cleanScore =
                scoreText
                    .replace(/```json/g, "")
                    .replace(/```/g, "")
                    .trim();

            const score =
                JSON.parse(
                    cleanScore
                );

            results.push({

                title:
                    job.title,

                url:
                    job.url,

                score:
                    score.score,

                shouldApply:
                    score.shouldApply

            });

        } catch (err) {

            console.log(
                "Skipped:",
                job.title
            );

            console.log(
                err.message
            );

        }

    }

    results.sort(
        (a, b) =>
            b.score - a.score
    );

    return results.slice(0, 5);

}

module.exports = {
    getTopMatches
};