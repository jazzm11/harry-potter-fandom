// Utils
const { getApiData } = require("../utils/apiUtils");

const homePage = async (req, res) => {
  try {
    const randomCharacter = await getApiData("/characters/random");
    const randomBook = await getApiData("/books/random");
    res.render("index", { character: randomCharacter, book: randomBook });
  } catch (error) {
    console.error("Error fetching character:", error);
    res.status(500).render("error", { error: "Failed to fetch character or book" });
  }
};

module.exports = {
    homePage
};