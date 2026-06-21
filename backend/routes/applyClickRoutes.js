const express = require("express");

const router = express.Router();

const {
    clickApply
} = require("../controllers/applyClickController");

router.get(
    "/click-apply",
    clickApply
);

module.exports = router;