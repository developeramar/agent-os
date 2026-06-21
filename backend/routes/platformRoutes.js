const express = require("express");

const router =
    express.Router();

const {
    getPlatformInfo
} = require(
    "../controllers/platformController"
);

router.get(
    "/platform/:platform",
    getPlatformInfo
);

module.exports = router;