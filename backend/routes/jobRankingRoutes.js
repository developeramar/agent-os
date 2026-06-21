const express = require("express");

const router = express.Router();

const {
    rank
} = require("../controllers/jobRankingController");

router.get("/rank", rank);

module.exports = router;