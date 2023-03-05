const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("static"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'view');

// function home (req, res) {
//   res.render('home', {data: title})
// }

app.listen(port, () => {
  console.log("yoyoyoyooooo" + port);
});

app.get("/home", (req, res) => {
  res.render('home')
});

app.get("/home/stephan/", (req, res) => {
  res.send(
    '<img src="/img/milk.png" width="200"><h1>Hes the one and only <em>Stephan</em></h1>'
  );
});

app.get("/home/:user/", (req, res) => {
  console.log("input from ${req.params.user}");
  res.send(
    '<img src="/img/milk.png" width="200"> <h1>This guy ' +
      req.params.user +
      " is a fella</h1>"
  );
});