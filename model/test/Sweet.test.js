const mongoose = require("mongoose");
const Sweet = require("../Sweet");
const connectDatabase = require("../../config/db");
beforeAll(async () => {
  connectDatabase();
});

describe("Sweet Model Tests", () => {
  it(" should create and save a sweet successfully", async () => {
    const sweetData = {
      name: "Gulab Jamun",
      Category: "Milk-based",
      price: 15,
      Quantity: 20,
    };

    const sweet = new Sweet(sweetData);

    expect(sweet._id).toBeDefined();
    expect(sweet.name).toBe("Gulab Jamun");
    expect(sweet.Category).toBe("Milk-based");
    expect(sweet.price).toBe(15);
    expect(sweet.Quantity).toBe(20);
  });
}, 10000);
