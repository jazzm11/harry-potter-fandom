const express = require("express");

const router = express.Router();

// Import the controller
const housesController = require("../controller/housesController");

// Sample route to get all houses
router.get("/houses", housesController.housePage);
module.exports = router;
