const Sweet = require("../model/Sweet");

async function searchSweet(req, res) {
  const { name, Category } = req.query;

  try {
    const sweet = await Sweet.find({
      $or: [{ name: name }, { Category: Category }],
    });
    return res.status(200).json(sweet);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { searchSweet };
