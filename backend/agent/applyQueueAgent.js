const {
    getApplications
} = require("./applicationAgent");

function getApplyQueue() {

    const applications =
        getApplications();

    return applications.filter(
        app =>
            app.status ===
            "Recommended"
    );

}

module.exports = {
    getApplyQueue
};