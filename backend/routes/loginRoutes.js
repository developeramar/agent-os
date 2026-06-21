const express = require("express");

const router = express.Router();

const {
    inspectLogin
} = require("../controllers/loginController");

router.get(
    "/inspect-login",
    inspectLogin
);

module.exports = router;