const sweetRouter = require("express").Router();
const { addSweet } = require("../controller/addSweetController");
const { deleteSweet } = require("../controller/deleteSweetController");
const { getSweet } = require("../controller/getAllSweetController");

sweetRouter.post("/add", addSweet);
sweetRouter.post("/delete/:id", deleteSweet);
sweetRouter.get("/", getSweet);
module.exports = { sweetRouter };
