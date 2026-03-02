const express = require("express");

const router = express.Router();

// Import the controller
const defaultController = require("../controller/defaultController");

// Sample route to get all Data for home page
router.get("/", defaultController.homePage);
module.exports = router;
