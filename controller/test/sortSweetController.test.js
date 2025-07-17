const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");

describe("GET /sweet/sort - Sort sweets", () => {
  let sweet1, sweet2, sweet3;

  beforeAll(async () => {

    const res1 = await request(app).post("/sweet").send({
      name: "Sweet A",
      Category: "Dry",
      price: 100,
      Quantity: 20,
    });
    sweet1 = res1.body;

    const res2 = await request(app).post("/sweet").send({
      name: "Sweet B",
      Category: "Ghee-based",
      price: 50,
      Quantity: 5,
    });
    sweet2 = res2.body;

    const res3 = await request(app).post("/sweet").send({
      name: "Sweet C",
      Category: "Milk-based",
      price: 75,
      Quantity: 10,
    });
    sweet3 = res3.body;
  });

  test("should sort by price ascending", async () => {
    const res = await request(app).get("/sweet/sort?sortBy=price&order=asc");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].price).toBeLessThanOrEqual(res.body[1].price);
  });

  test("should sort by Quantity descending", async () => {
    const res = await request(app).get("/sweet/sort?sortBy=Quantity&order=desc");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].Quantity).toBeGreaterThanOrEqual(res.body[1].Quantity);
  });

  test("should sort by Category ascending", async () => {
    const res = await request(app).get("/sweet/sort?sortBy=Category&order=asc");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].Category <= res.body[1].Category).toBe(true);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
