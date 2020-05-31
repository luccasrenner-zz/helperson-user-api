const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const Router = require("./middleware/index");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);

app.get("/", function (req, res) {
  res.sendFile("static/view/index/index.html", { root: __dirname });
});

app.get("/login", function (req, res) {
  res.sendFile("static/view/login/index.html", { root: __dirname });
});

app.get("/newaccount", function (req, res) {
  res.sendFile("static/view/newAccount/index.html", { root: __dirname });
});

app.get("/main-person", function (req, res) {
  res.sendFile("static/view/dashboard/person/db-person.html", {
    root: __dirname,
  });
});

app.get("/main-helper", function (req, res) {
  res.sendFile("static/view/dashboard/helper/db-helper.html", {
    root: __dirname,
  });
});


app.listen(3333);
