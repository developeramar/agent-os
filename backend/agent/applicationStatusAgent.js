const {
    getApplications,
    saveApplications
} = require("./applicationAgent");

function updateStatus(
    jobUrl,
    newStatus
) {

    const applications =
        getApplications();

    const application =
        applications.find(
            app => app.url === jobUrl
        );

    if (!application) {

        throw new Error(
            "Application not found"
        );

    }

    application.status =
        newStatus;

    application.updatedAt =
        new Date().toISOString();

    saveApplications(
        applications
    );

    return application;

}

module.exports = {
    updateStatus
};