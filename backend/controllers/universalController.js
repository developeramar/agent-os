const {
    getConnector
} = require("../agent/platformAgent");

const fs = require("fs");
exports.searchJobs = async (
    req,
    res
) => {

    try {

        const platform =
            req.params.platform;

        const connector =
            getConnector(
                platform
            );

        const result =
            await connector.searchJobs(
                req.query.q || "customer support"
            );

        res.status(200).json({
            success: true,
            result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });

    }

};


exports.bestMatches = async (
    req,
    res
) => {

    try {

        const platform =
            req.params.platform;

        const connector =
            getConnector(
                platform
            );

        const profile =
            JSON.parse(
                fs.readFileSync(
                    "./data/profile.json",
                    "utf8"
                )
            );

        const result =
            await connector.getBestMatches(
                profile,
                req.query.q ||
                "customer support"
            );

        res.status(200).json({
            success: true,
            result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });

    }

};

exports.login = async (
    req,
    res
) => {

    try {

        const platform =
            req.params.platform;

        const connector =
            getConnector(
                platform
            );

        const result =
            await connector.login();

        res.status(200).json({
            success: true,
            result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });

    }

};

exports.applyJob = async (
    req,
    res
) => {

    try {

        const platform =
            req.params.platform;

        const connector =
            getConnector(
                platform
            );

        const result =
            await connector.applyJob();

        res.status(200).json({
            success: true,
            result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });

    }

};