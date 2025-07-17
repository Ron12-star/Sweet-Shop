const request = require("supertest");
const app = require("../../app");

describe("Get All Sweet", () => {
  test("GET /sweets - should return all sweets", async () => {
    const res = await request(app).get("/sweets");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty("name");
      expect(res.body[0]).toHaveProperty("Category");
      expect(res.body[0]).toHaveProperty("price");
      expect(res.body[0]).toHaveProperty("Quantity");
    }
  });
});
