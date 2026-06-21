const express = require("express");

const router = express.Router();

const {
    search
} = require("../controllers/jobSearchController");

router.get("/search", search);

module.exports = router;