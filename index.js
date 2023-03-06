const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "view");

app.listen(port, () => {
  console.log("server started on port" + port);
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home"});
});

app.get("/magic", (req, res) => {
  res.render("magic");
});

// data voor als je magic hebt gekozen

const magicNpcList = [
  {
    name: "Wise old Man",
    description: "He likes to rob banks",
  },
  {
    name: "Jad",
    description: "Watch out for his fireballs",
  },
  {
    name: "Wizard Mizgog",
    description: "Still looking for imps",
  },
];

app.get("/magiclist", (req, res) => {
  res.render("magiclist", { magicNpcList: magicNpcList });
});

// 404 pagina altijd onderaan

app.get("/*", (req, res) => {
  res.render("404");
});

app.get("/*/*", (req, res) => {
  res.render("404");
});