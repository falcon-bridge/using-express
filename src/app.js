const path = require("path");

const express = require("express");

const hbs = require("hbs");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "../public"));

const app = express();

// define paths for express configuration
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Aayush Kumar",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is a helpful text",
    name: "Aayush Kumar",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About me", name: "Aayush Kumar" });
});

app.get("/help/*", (req, res) => {
  res.render("pageNotFound", {
    title: "404",
    name: "Aayush Kumar",
    msg: "Help article not found.",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Please provide a valid address" });
  }
  res.send({
    forecast: "It is raining here.",
    location: "Mumbai",
    address: req.query.address,
  });
});

app.get("*", (req, res) => {
  res.render("pageNotFound", {
    title: "404",
    name: "Aayush Kumar",
    msg: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
