const {
    getTopMatches
} = require("../agent/topMatchesAgent");

const fs = require("fs");
exports.topMatches = async (req, res) => {

    try {

        const resumeProfile =
            JSON.parse(
                fs.readFileSync(
                    "./data/profile.json",
                    "utf8"
                )
            );

        const topMatches =
            await getTopMatches(
                resumeProfile,
                "customer support"
            );

        res.status(200).json({

            success: true,

            totalChecked:
                topMatches.length,

            topMatches

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