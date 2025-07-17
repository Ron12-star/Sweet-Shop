const sweetRouter = require("express").Router();
const { addSweet } = require("../controller/addSweetController");
const { deleteSweet } = require("../controller/deleteSweetController");
const { getSweet } = require("../controller/getAllSweetController");
const { searchSweet } = require("../controller/searchSweetController");

sweetRouter.post("/add", addSweet);
sweetRouter.post("/delete/:id", deleteSweet);
sweetRouter.get("/", getSweet);
sweetRouter.get("/search",searchSweet);
module.exports = { sweetRouter };
