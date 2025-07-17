const mongoose = require("mongoose");

const Sweetschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    index : true,
  },
  Category: {
    type: String,
    require: true,
    index:true,
  },
  price: {
    type: Number,
    require: true,
    min: 0,
    index:true,
  },
  Quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Sweet = mongoose.model("Sweet", Sweetschema);

module.exports = Sweet;
