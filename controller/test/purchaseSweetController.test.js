const request = require("supertest");
const app = require("../../app");

describe("post purchase Sweet", () => {
  test("POST sweet/purchase/:id - should reduce stock on purchase", async () => {
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
    const createRes = await request(app)
      .post("/sweet/purchase/")
      .send(newSweet);

    const purchaseRes = await request(app)
      .post(`/purchase/${createdSweetId}`)
      .send({ quantity: 3 });

    expect(purchaseRes.statusCode).toBe(200);
    expect(purchaseRes.body.sweet.Quantity).toBe(7); // 10 - 3
  });
});
