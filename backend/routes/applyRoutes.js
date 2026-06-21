const express = require("express");

const router = express.Router();

const {
    checkApplyButton,
    applyJob
} = require("../controllers/applyController");

router.get(
    "/check-apply",
    checkApplyButton
);

router.get(
    "/apply",
    applyJob
);

module.exports = router;