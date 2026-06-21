const {
    getApplications,
    saveApplications,
    alreadyExists
} = require("./applicationAgent");

function saveRecommendations(
    recommendations
) {

    const applications =
        getApplications();

    let savedCount = 0;

    for (const job of recommendations) {

        if (
            !alreadyExists(
                job.url
            )
        ) {

            applications.push({

                ...job,

                status:
                    "Recommended",

                savedAt:
                    new Date()
                        .toISOString()

            });

            savedCount++;

        }

    }

    saveApplications(
        applications
    );

    return {
        savedCount,
        totalApplications:
            applications.length
    };

}

module.exports = {
    saveRecommendations
};