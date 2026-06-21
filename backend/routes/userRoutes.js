const express = require("express");

const router =
    express.Router();

const authMiddleware =
    require(
        "../middleware/authMiddleware"
    );

const {
    getProfile
} = require(
    "../controllers/userController"
);

router.get(
    "/my-account",
    authMiddleware,
    getProfile
);

module.exports =
    router;