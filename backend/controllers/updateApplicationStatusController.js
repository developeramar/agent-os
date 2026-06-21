const {
    getApplications,
    saveApplications
} = require("../agent/applicationAgent");


console.log("UPDATE STATUS CONTROLLER LOADED");
exports.updateApplicationStatus = async (req, res) => {

    try {

        const {
            url,
            status
        } = req.body;

        const applications =
            getApplications();

        const application =
            applications.find(
                app => app.url === url
            );

        if (!application) {

            return res.status(404).json({
                success: false,
                message: "Application not found"
            });

        }

        application.status = status;

        saveApplications(
            applications
        );

        res.status(200).json({
            success: true,
            application
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};