const express = require("express");

const router = express.Router();

const {
    matchJob
} = require("../controllers/jobMatchController");

router.get(
    "/match",
    matchJob
);

module.exports = router;