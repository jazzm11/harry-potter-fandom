// Utils
const { getApiData } = require("../utils/apiUtils");

const housePage = async (req, res) => {
  try {
    const houses = await getApiData("/houses");
    res.render("houses", { houses });
  } catch (error) {
    console.error("Error fetching houses:", error);
    res.status(500).render("error", { error: "Failed to fetch houses" });
  }
};

module.exports = {
  housePage
};