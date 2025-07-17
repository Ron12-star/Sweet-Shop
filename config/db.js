const { configDotenv } = require("dotenv");
const Mongoose = require("mongoose");
require("dotenv").config({ debug: false });

const connectDatabase = async () => {
  try {
    await Mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb conneection is working");
  } catch (err) {
    console.log("Mongodb connection error", err);
  }
};

module.exports = connectDatabase;
