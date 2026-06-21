const {
    getApplications
} = require("../agent/applicationAgent");

exports.getApplicationStats = async (req, res) => {

    try {

        const applications =
            getApplications();

        const stats = {

            total:
                applications.length,

            pending:
                applications.filter(
                    app => app.status === "Pending"
                ).length,

            applied:
                applications.filter(
                    app => app.status === "Applied"
                ).length,

            interview:
                applications.filter(
                    app => app.status === "Interview"
                ).length,

            rejected:
                applications.filter(
                    app => app.status === "Rejected"
                ).length,

            offer:
                applications.filter(
                    app => app.status === "Offer"
                ).length

        };

        res.status(200).json({
            success: true,
            stats
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};