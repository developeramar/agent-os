const fs = require("fs");

function getApplications() {

    return JSON.parse(
        fs.readFileSync(
            "./data/applications.json",
            "utf8"
        )
    );

}

function saveApplications(
    applications
) {

    fs.writeFileSync(
        "./data/applications.json",
        JSON.stringify(
            applications,
            null,
            2
        )
    );

}

function alreadyExists(url) {

    const applications =
        getApplications();

    return applications.find(
        app => app.url === url
    );

}

module.exports = {
    getApplications,
    saveApplications,
    alreadyExists
};