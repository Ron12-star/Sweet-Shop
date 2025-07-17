const sweetRouter = require("express").Router();
const { addSweet } = require("../controller/addSweetController");
const { deleteSweet } = require("../controller/deleteSweetController");

sweetRouter.post("/add", addSweet);
sweetRouter.post("/delete/:id", deleteSweet);
module.exports = { sweetRouter };
