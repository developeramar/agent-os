const express = require("express");

const router = express.Router();

const {
    getApplicationStats
} = require(
    "../controllers/applicationStatsController"
);

router.get(
    "/application-stats",
    getApplicationStats
);

module.exports = router;