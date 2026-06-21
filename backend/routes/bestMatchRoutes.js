const express = require("express");

const router = express.Router();

const {
    bestMatch
} = require("../controllers/bestMatchController");

router.get(
    "/best-match",
    bestMatch
);

module.exports = router;