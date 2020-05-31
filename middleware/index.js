let express = require("express");
let App = express.Router();

let newAccount = require("./newAccount/newAccount");
let login = require("./login/login");
let postList = require('./post_list/post_list')
let newUserQuery = require('./newUserQuery/newUserQuery');
let toHelp = require('./toHelp/toHelp');
let newStream = require('./newStream/newStream');

App.post("/newAcount", newAccount);
App.post("/auth", login);

App.get("/person_query", postList);

App.get("/toHelp", toHelp)

App.post('/newUserQuery', newUserQuery);

App.get( '/newStream', newStream )

module.exports = App;
