const express =
    require("express");

const router =
    express.Router();

const {
    getEmails
} = require(
    "../controllers/gmailReadController"
);

router.get(
    "/gmail/read",
    getEmails
);

module.exports =
    router;