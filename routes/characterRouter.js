const express = require("express");

const router = express.Router();

// Import the controller
const characterController = require("../controller/characterController");

// Sample route to get all characters
router.get("/characters", characterController.characterPage);
module.exports = router;
