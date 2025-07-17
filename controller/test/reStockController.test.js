const request = require("supertest");
const app = require("../../app");

describe("PATCH Restock sweets", () => {
   test("PATCH /sweet/restock/:id - should restock a sweet", async () => {

  const newSweet = {
    name: "Mysore Pak",
    Category: "Ghee-based",
    price: 40,
    Quantity: 10,
  };
  const createRes = await request(app).post("/sweet").send(newSweet);
  const sweetId = createRes.body._id;

  // Now restock it
  const res = await request(app)
    .patch(`/sweet/restock/${sweetId}`)
    .send({quantityToAdd: 5  })
    .set("Content-Type", "application/json");

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("message", "Sweet restocked successfully");
  expect(res.body.sweet).toHaveProperty("Quantity", 15);
});
});
















