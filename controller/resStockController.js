const Sweet = require("../model/Sweet");

const restockSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;
    const { quantityToAdd } = req.body;

    console.log(sweetId); 
    console.log(quantityToAdd); 

    const sweet = await Sweet.findById(sweetId);
    if (!sweet) return res.status(404).json({ message: "Sweet not found" });

    sweet.Quantity += quantityToAdd;

    const updatedSweet = await sweet.save();

    return res.status(200).json({
      message: "Sweet restocked successfully", 
      sweet: updatedSweet,
    });
  } catch (error) {
    console.error("Restock error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { restockSweet };
