const express = require("express");

const router =
    express.Router();

const {
    openSession,
    detectLogin
} = require(
    "../controllers/sessionController"
);

router.get(
    "/session",
    openSession
);

router.get(
    "/detect-login",
    detectLogin
);

module.exports = router;