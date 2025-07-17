const request = require("supertest");
const app = require("../../app");

describe("POST /sweet/purchase/:id - purchase sweet and reduce stock", () => {
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

  test("should reduce stock on purchase", async () => {
    const purchaseRes = await request(app)
      .post(`/sweet/purchase/${createdSweetId}`)
      .send({ quantity: 3});

    expect(purchaseRes.statusCode).toBe(200);
    expect(purchaseRes.body.sweet.Quantity).toBe(7); 
  });
});
