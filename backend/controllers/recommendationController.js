const fs = require("fs");

const {
    getConnector
} = require("../agent/platformAgent");

const {
    getRecommendations
} = require("../agent/recommendationAgent");

const {
    saveRecommendations
} = require("../agent/recommendationSaverAgent");

exports.getRecommendations = async (
    req,
    res
) => {

    try {

        const profile =
            JSON.parse(
                fs.readFileSync(
                    "./data/profile.json",
                    "utf8"
                )
            );

        const connector =
            getConnector(
                "internshala"
            );

        const searchQuery =
            profile.preferredRoles?.[0] ||
            "customer support";

        const result =
            await connector.getBestMatches(
                profile,
                searchQuery
            );

        const recommendations =
            getRecommendations(
                result.matches
            );

        const saveResult =
            saveRecommendations(
                recommendations
            );

        res.status(200).json({

            success: true,

            total:
                recommendations.length,

            saved:
                saveResult.savedCount,

            totalApplications:
                saveResult.totalApplications,

            recommendations

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