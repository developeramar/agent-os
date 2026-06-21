const fs = require("fs");

const { buildProfile } =
require("../agent/profileAgent");

exports.saveProfile =
async (req, res) => {

    try {

        const profile =
            buildProfile(req.body);

        fs.writeFileSync(
            "./data/profile.json",
            JSON.stringify(
                profile,
                null,
                2
            )
        );

        res.status(200).json({
            success: true,
            profile
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