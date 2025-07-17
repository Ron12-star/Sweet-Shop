const mongoose = require("mongoose");
const Sweet = require("../model/Sweet");

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/test_sweets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
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
    const savedSweet = await sweet.save();

    expect(savedSweet._id).toBeDefined();
    expect(savedSweet.name).toBe("Gulab Jamun");
    expect(savedSweet.Category).toBe("Milk-based");
    expect(savedSweet.price).toBe(15);
    expect(savedSweet.Quantity).toBe(20);
  });

 
});
