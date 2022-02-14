const path = require("path");

const express = require("express");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "../public"));

const app = express();

const publicDirPath = path.join(__dirname, "../public");

app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.send("Hello Express !");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
