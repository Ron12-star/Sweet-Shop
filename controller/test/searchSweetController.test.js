const request = require("supertest");
const app = require("../../app");

describe("Search Sweet Controller", () => {
  test("GET /sweet/search - should return sweets matching search query", async () => {
    // Insert a sweet first
    const sweetToSearch = {
      name: "Gulab Jamun",
      Category: "Milk-based",
      price: 35,
      Quantity: 10,
    };

    await request(app).post("/sweet").send(sweetToSearch);

    const res = await request(app).get("/sweet/search?name=Gulab Jamun");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("name", "Gulab Jamun");
  });
});
