const Sweet = require("../model/Sweet");

async function getSweet(req, res){
  try {
    const sweets = await Sweet.find();
    return res.status(200).json(sweets)
  } catch (error) {
   throw new Error(error)
  }
};


module.exports = { getSweet };
