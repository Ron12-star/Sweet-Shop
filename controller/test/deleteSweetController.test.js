const request = require("supertest");
const app = require("../../app");

describe("Delete Sweet Controller Test", () => {
  let createdSweetId;
  beforeAll(async () => {
    const res = await request(app).post("/sweet/add").send({
      name: "Test Sweet",
      Category: "Dry",
      price: 100,
      Quantity: 10,
    });
    createdSweetId = res.body.id;
  });

  test("DELETE /sweet/delete/:id - should delete sweet", async () => {
    const res = await request(app).post(`/sweet/delete/${createdSweetId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "sweet deleted successfully");
  }, 10000);
});
