const express = require("express");

const router =
    express.Router();

const {
    searchJobs,
    bestMatches,
    login,
    applyJob
} = require(
    "../controllers/universalController"
);

router.get(
    "/platform/:platform/search",
    searchJobs
);
router.get(
    "/platform/:platform/best-matches",
    bestMatches
);

router.get(
    "/platform/:platform/login",
    login
);

router.get(
    "/platform/:platform/apply",
    applyJob
);

module.exports = router;