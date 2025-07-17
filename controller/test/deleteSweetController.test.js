const request = require("supertest");
const mongoose = require("mongoose");

describe("Delete Sweet Controller Test", () => {
  test("DELETE /sweet/delete/:id - should delete sweet", async () => {
    const res = await request(app).delete(`/sweet/delete/:id${createdSweetId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "sweet deleted successfully");
  });
});
