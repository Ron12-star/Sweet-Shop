const Mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await Mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb conneection is working");
  } catch (err) {
    console.log("Mongodb connection error", err);
    process.exit(1);
  }
};

module.exports = connectDatabase;
