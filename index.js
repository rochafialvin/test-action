const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello emang ga bisa make ssh</h1>");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
