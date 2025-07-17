const request = require("supertest");
const app = require("../../app");
const mongoose=require('mongoose');
describe("PATCH Restock sweets", () => {
  let createdSweetId;
  beforeAll(async () => {
    const res = await request(app).post("/sweet/add").send({
      name: "Test Sweet",
      Category: "Dry",
      price: 100,
      Quantity: 10,
    });
    createdSweetId = res.body._id || res.body.id;
  });
  test("PATCH /sweet/restock/:id - should restock a sweet", async () => {
    const res = await request(app)
      .patch(`/sweet/restock/${createdSweetId}`)
      .send({ quantityToAdd: 5 })
      .set("Content-Type", "application/json");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Sweet restocked successfully");
    expect(res.body.sweet).toHaveProperty("Quantity", 15);
  }, 15000);
  afterAll(async () => {
  await mongoose.connection.close();
});

});
