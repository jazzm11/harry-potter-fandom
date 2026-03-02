const express = require("express");

const app = express();
const PORT = 3000;

// APP settings
app.set("view engine", "ejs");
require("dotenv").config();
app.use(express.static("public"));

// Routes
const booksRouter = require("./routes/booksRouter");
const characterRouter = require("./routes/characterRouter");
const defaultRouter = require("./routes/defaultRouter");
const spellsRouter = require("./routes/spellsRouter");
const housesRouter = require("./routes/housesRouter");

// Use Routes
app.use(defaultRouter);
app.use(booksRouter);
app.use(characterRouter);
app.use(housesRouter);
app.use(spellsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
