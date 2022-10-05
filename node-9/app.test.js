const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    //.expect("Content-Type", "application/json");
    .expect("Content-Type", "text/html"); //1

  //expect(response.body).toEqual({ location: "Earth" });
  expect(response.text).toEqual("<html><body>Welcome to the World Wide Web!</body></html>"); //2
});

//3 test is failed;

//5 test successful;