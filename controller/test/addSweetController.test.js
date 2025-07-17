const request = require("supertest");
// const app = require("../Server");
const mongoose = require("mongoose");

const app = require("../../app");

describe("Add Sweet Controller Test", () => {
  test("POST /sweets - should create a new sweet", async () => {
    const newSweet = {
      name: "Kaju Katli",
      Category: "Nut-based",
      price: 50,
      Quantity: 20,
    };

    const res = await request(app).post("/sweets").send(newSweet);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "Kaju Katli");
    createdSweetId = res.body._id;
  });
});
