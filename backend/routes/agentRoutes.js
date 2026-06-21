const express = require("express");

const router = express.Router();

const {
  openGoogle,
} = require("../controllers/agentController");

router.post("/google", openGoogle);

module.exports = router;