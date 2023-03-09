const express = require("express");
const app = express();
const port = 8000;

require("dotenv").config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASS + "@matching-app-database.bskph4g.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collectionMagic = client.db("runescapeNpcs").collection("magic");
  const collectionCombat = client.db("runescapeNpcs").collection("combat");
  const collectionAdventuring = client.db("runescapeNpcs").collection("adventuring");
  // perform actions on the collection object
});

// apps
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "view");

app.listen(port, () => {
  console.log("server started on port " + port);
});

// home pagina
app.get("/home", (req, res) => {
  res.render("home", { title: "Home"});
});

// magic pagina
app.get("/magic", (req, res) => {
  res.render("magic", { title: "Magic"});
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

// lijst van magic NPC's pagina
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