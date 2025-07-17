const request = require("supertest");
const app = require("../app");

describe("Basic Server Checks", () => {
  test("Get / returns 200 and welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Welcome to Sweet Shop/i);
  });
});
