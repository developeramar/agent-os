const express = require("express");

const router = express.Router();

const {
    saveApplication
} = require("../controllers/saveApplicationController");


router.post(
    "/save-application",
    saveApplication
);

module.exports = router;