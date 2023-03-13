require("dotenv").config()

// server setup
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASS + "@matching-app-database.bskph4g.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err) throw err;
});

// apps
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
  res.render("magic", { title: "Magic" });
});

// magic list function
app.post("/magiclist", async (req, res) => {
  const selection = [req.body.category].flat();
  const collectionMagic = client.db("runescapeNpcs").collection("magic");
  const result = await collectionMagic.find({ category: { $in: selection } }).toArray((err, result) => {
    if (err) throw err;
    return result; 
  });
  res.render("magiclist", {magicNpcList: result, title: "Magic results" });
});

// combat page
app.get("/combat", (req, res) => {
  res.render("combat", { title: "Combat" });
});

// combat list function
app.post("/combatlist", async (req, res) => {
  const selection = [req.body.category].flat();
  const collectionCombat = client.db("runescapeNpcs").collection("combat");
  const result = await collectionCombat.find({ category: { $in: selection } }).toArray((err, result) => {
    if (err) throw err;
    return result; 
  });
  res.render("combatlist", {combatNpcList: result, title: "Combat results" });
});

// adventuring page
app.get("/adventuring", (req, res) => {
  res.render("adventuring", { title: "Adventuring" });
});

// adventuring list function
app.post("/adventuringlist", async (req, res) => {
  const selection = [req.body.category].flat();
  const collectionAdventuring = client.db("runescapeNpcs").collection("adventuring");
  const result = await collectionAdventuring.find({ category: { $in: selection } }).toArray((err, result) => {
    if (err) throw err;
    return result; 
  });
  res.render("adventuringlist", {adventuringNpcList: result, title: "Adventuring results" });
});

// 404 page always on bottom
app.get("/*", (req, res) => {
  res.render("404", { title: "404" });
});