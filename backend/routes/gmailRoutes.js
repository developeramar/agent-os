const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    sendEmail
} = require("../controllers/gmailController");

router.post(
    "/gmail/send",
    auth,
    sendEmail
);

module.exports = router;