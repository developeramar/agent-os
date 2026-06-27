const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth"); // path check kar lena

const {
    sendEmail
} = require("../controllers/gmailController");

console.log("GMAIL ROUTES LOADED");

router.post(
    "/gmail/send",
    auth,
    sendEmail
);

module.exports = router;