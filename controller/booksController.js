// Utils
const { getApiData } = require("../utils/apiUtils");

const bookPage = async (req, res) => {
  try {
    const books = await getApiData("/books");
    res.render("books", { books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).render("error", { error: "Failed to fetch books" });
  }
};

module.exports = {
  bookPage
};