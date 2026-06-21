const express = require("express");

const router = express.Router();

const {
    analyzeLatestJob
} = require("../controllers/jobAnalysisController");

router.get("/latest-job", analyzeLatestJob);

module.exports = router;