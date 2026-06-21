const express = require("express");

const router = express.Router();

console.log("UPDATE STATUS ROUTES LOADED");

const {
    updateApplicationStatus
} = require(
    "../controllers/updateApplicationStatusController"
);

router.put(
    "/application-status",
    updateApplicationStatus
);

module.exports = router;