const Sweet = require("../model/Sweet");

const sortSweets = async (req, res) => {
  try {
    const { sortBy = "price", order = "asc" } = req.query;

    const allowedFields = ["price", "Quantity", "Category"];
    if (!allowedFields.includes(sortBy)) {
      return res.status(400).json({ error: "Invalid sort field" });
    }

    const sortOrder = order === "desc" ? -1 : 1;

    const sortedSweets = await Sweet.find().sort({ [sortBy]: sortOrder });

    return res.status(200).json(sortedSweets);
  } catch (error) {
    console.error("Error sorting sweets:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { sortSweets };
