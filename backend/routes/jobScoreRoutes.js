const express = require("express");

const router = express.Router();

const {
    testScore
} = require("../controllers/jobScoreController");

router.get(
    "/score",
    testScore
);

module.exports = router;