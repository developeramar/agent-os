const express = require("express");

const router = express.Router();

const {
    topMatches
} = require("../controllers/topMatchesController");

router.get(
    "/top-matches",
    topMatches
);

module.exports = router;