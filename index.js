require("dotenv").config({ debug: false });
const express = require("express");
const DatabaseConnection = require("./config/db")

const app =require("./app")
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Sweet Shop");
});
const PORT = process.env.PORT || 4444;
const StartServer = async () => {
  await DatabaseConnection();
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
  );
};

if (require.main === module) {
  StartServer();
}