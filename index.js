const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'view');

app.listen(port, () => {
  console.log("yoyoyoyooooo" + port);
});

app.get("/home", (req, res) => {
  res.render('home')
});

app.get("/magic", (req, res) => {
  res.render('magic')
});

app.get("/magiclist", (req, res) => {
  res.render('magiclist')
});

app.get("*", (req, res) => {
  res.render('404')
});

const magicNPCs = [
  {
    name: "Wise old Man",
    description: "He likes to rob banks"
  },
  {
    name: "Jad",
    description: "Watch out for his fireballs"
  },
  {
    name: "Wizard Mizgog",
    description: "Likes to roam around the wizard's tower"
  }
];