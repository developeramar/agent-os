const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(
        "../middleware/authMiddleware"
    );

const {
    getInboxSummary
} = require(
    "../controllers/emailIntelligenceController"
);

router.get(
    "/gmail/intelligence",
    authMiddleware,
    getInboxSummary
);

module.exports =
    router;