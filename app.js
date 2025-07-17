const express = require("express");
const app = express();
const { sweetRouter } = require("./routes/sweetRouter");
const DatabaseConnection = require("./config/db");

DatabaseConnection();
app.use(express.json());
app.use("/sweet", sweetRouter);
app.get("/", (req, res) => {
  res.send("Welcome to Sweet Shop");
});


module.exports = app;
