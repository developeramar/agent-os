const fs = require("fs");

exports.getApplications = async (req, res) => {

    try {

        const applications = JSON.parse(
            fs.readFileSync(
                "./data/applications.json",
                "utf8"
            )
        );

        res.status(200).json({
            success: true,
            applications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};