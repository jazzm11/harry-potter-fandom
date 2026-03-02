const express = require("express");

const router = express.Router();

// Import the controller
const spellsController = require("../controller/spellsController");

// Sample route to get all spells
router.get("/spells", spellsController.spellPage);
module.exports = router;
