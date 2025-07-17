const sweetRouter = require("express").Router();
const { addSweet } = require("../controller/addSweetController");

sweetRouter.post("/add", addSweet);

module.exports = { sweetRouter };
