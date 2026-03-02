const express = require("express");

const router = express.Router();

// Import the controller
const bookController = require("../controller/booksController");

// Sample route to get all books
router.get("/books", bookController.bookPage);
module.exports = router;
