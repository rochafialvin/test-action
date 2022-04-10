const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = 2999;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello from the other side</h1>");
});

app.get("/books", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://fakerapi.it/api/v1/books?_quantity=3"
    );

    res.send(data);
  } catch (error) {
    console.log({ error });
  }
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
