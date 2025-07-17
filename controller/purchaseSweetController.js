const Sweet = require("../model/Sweet");

async function purchaseSweet(req, res) {
  try {
    const { id } = req.params; // ✅ fix 1
    const quantity = req.body.quantity;

    console.log("ID:", id);
    console.log("Quantity:", quantity);

    if (!id || isNaN(quantity) || quantity <= 0) {
      return res.status(400).json({ message: "Invalid sweet ID or quantity" });
    }

    const sweet = await Sweet.findById(id);
    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.Quantity < quantity) {
      return res
        .status(400)
        .json({ message: `Only ${sweet.Quantity} left in stock` });
    }

    sweet.Quantity -= quantity; // ✅ fix 2
    await sweet.save();

    return res.status(200).json({ message: "Purchase successful", sweet }); // ✅ move response after saving
  } catch (error) {
    console.error("Purchase Error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = { purchaseSweet };
