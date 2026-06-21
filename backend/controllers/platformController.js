const {
    getConnector
} = require("../agent/platformAgent");

exports.getPlatformInfo =
async (req, res) => {

    try {

        const platform =
            req.params.platform;

        const connector =
            getConnector(
                platform
            );

        res.status(200).json({
            success: true,
            platform:
                connector.getPlatformName()
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message:
                error.message
        });

    }

};