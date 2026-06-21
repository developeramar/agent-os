const express =
    require("express");

const router =
    express.Router();

const {
    sendEmail
} = require(
    "../controllers/gmailController"
);

console.log(
  "GMAIL ROUTES LOADED"
);

router.post(
    "/gmail/send",
    sendEmail
);

module.exports =
    router;