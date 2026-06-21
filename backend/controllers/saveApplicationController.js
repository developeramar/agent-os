const {
    getApplications,
    saveApplications,
    alreadyExists
} = require("../agent/applicationAgent");

exports.saveApplication = async (req, res) => {

    try {

        const application = req.body;

        if (
            !application.title ||
            !application.url
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid application data"
            });
        }

        if (
            alreadyExists(application.url)
        ) {
            return res.status(400).json({
                success: false,
                message: "Application already saved"
            });
        }

        const applications =
            getApplications();

        applications.push({
            ...application,
            status: "Pending",
            savedAt: new Date().toISOString()
        });

        saveApplications(
            applications
        );

        res.status(200).json({
            success: true,
            totalApplications:
                applications.length
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};