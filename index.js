require("dotenv").config()

// server setup
const express = require("express");
const app = express();
const port = 8000;

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

// home page
app.get("/home", (req, res) => {
  res.render("home", { title: "Home"});
});

// magic page
app.get("/magic", (req, res) => {
  res.render("magic", { title: "Magic"});
});

// data if magic was chosen
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
  {
    name: "Saradomin wizard",
    description: "Stops your clue steps in the name of Saradomin"
  },
  {
    name: "Zamorak wizard",
    description: "He tries"
  }
];

// list of magic NPC's page
app.get("/magiclist", (req, res) => {
  res.render("magiclist", { magicNpcList: magicNpcList });
});

// 404 page always on bottom
app.get("/*", (req, res) => {
  res.render("404");
});