const express = require("express");

const router = express.Router();

const {
    getDetails
} = require("../controllers/jobDetailsController");

router.get(
    "/details",
    getDetails
);

module.exports = router;