const path = require("path");

const express = require("express");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "../public"));

const app = express();

// define paths for express configuration
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

//setup static directory to serve
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Aayush Kumar",
  });
});

app.get("/help", (req, res) => {
  res.render("help", { helpText: "This is a helpful text" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About me", name: "aayush" });
});

app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
