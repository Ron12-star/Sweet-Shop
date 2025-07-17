const sweetRouter = require("express").Router();
const { addSweet } = require("../controller/addSweetController");
const { deleteSweet } = require("../controller/deleteSweetController");
const { getSweet } = require("../controller/getAllSweetController");
const { searchSweet } = require("../controller/searchSweetController");
const { purchaseSweet } = require("../controller/purchaseSweetController");
const { restockSweet } = require("../controller/resStockController");
const { sortSweets } = require("../controller/sortSweetController");

sweetRouter.post("/add", addSweet);
sweetRouter.post("/delete/:id", deleteSweet);
sweetRouter.get("/", getSweet);
sweetRouter.get("/search",searchSweet);
sweetRouter.post("/purchase/:id",purchaseSweet);
sweetRouter.patch("/restock/:id",restockSweet);
sweetRouter.get("/sort",sortSweets);

module.exports = { sweetRouter };
