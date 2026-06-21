const internshalaConnector =
    require("../connectors/internshalaConnector");

// Future Connectors
// const naukriConnector =
//     require("../connectors/naukriConnector");

// const linkedinConnector =
//     require("../connectors/linkedinConnector");

function getConnector(
    platform
) {

    switch (
        platform.toLowerCase()
    ) {

        case "internshala":
            return internshalaConnector;

        // case "naukri":
        //     return naukriConnector;

        // case "linkedin":
        //     return linkedinConnector;

        default:
            throw new Error(
                "Unsupported platform"
            );

    }

}

module.exports = {
    getConnector
};