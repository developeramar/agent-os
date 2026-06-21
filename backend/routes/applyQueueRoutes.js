const express = require("express");

const router =
    express.Router();

const {
    getApplyQueue
} = require(
    "../controllers/applyQueueController"
);

router.get(
    "/apply-queue",
    getApplyQueue
);

module.exports = router;