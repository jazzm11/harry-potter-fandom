// Utils
const { getApiData } = require("../utils/apiUtils");

const characterPage = async (req, res) => {
  try {
    const character = await getApiData("/characters");
    res.render("character", { character });
  } catch (error) {
    console.error("Error fetching character:", error);
    res.status(500).render("error", { error: "Failed to fetch character" });
  }
};

module.exports = {
  characterPage
};