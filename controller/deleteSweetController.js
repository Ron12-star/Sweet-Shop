const Sweet = require("../model/Sweet");

async function deleteSweet (req, res) {
  try {
    const { id } = req.params;

    const sweet = await Sweet.findByIdAndDelete(id);
    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    return res.status(200).json({ message: "sweet deleted successfully" });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { deleteSweet };
