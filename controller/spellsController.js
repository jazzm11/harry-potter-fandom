// Utils
const { getApiData } = require("../utils/apiUtils");

const spellPage = async (req, res) => {
  try {
    const spells = await getApiData("/spells");
    res.render("spells", { spells });
  } catch (error) {
    console.error("Error fetching spells:", error);
    res.status(500).render("error", { error: "Failed to fetch spells" });
  }
};

module.exports = {
  spellPage
};