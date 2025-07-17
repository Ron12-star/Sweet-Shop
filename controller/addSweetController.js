const Sweet = require("../model/Sweet");

async function addSweet(req, res) {
  try {
    let { name, Category, price, Quantity } = req.body;
    price = Number(price);
    Quantity = Number(Quantity);

    if (
      typeof name !== "string" ||
      typeof Category !== "string" ||
      isNaN(price) ||
      price <= 0 ||
      isNaN(Quantity) ||
      Quantity <= 0
    ) {
      return res.status(400).json({
        message: "All fields are required and must be valid",
      });
    }

    const sweet = await Sweet.create({ name, Category, price, Quantity });
    await sweet.save();

    return res.status(201).json({
      id: sweet._id,
      name,
      Category,
      price,
      Quantity,
    });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { addSweet };
