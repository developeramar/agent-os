const express = require("express");

const router =
    express.Router();

const {
    autoApply
} = require(
    "../controllers/autoApplyController"
);

router.get(
    "/auto-apply",
    autoApply
);

module.exports = router;