const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const SSH = require("simple-ssh");

var app = express();
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/close", function (req, res, next) {
    // var r = JSON.parse(req);
    console.log("req: " + req);
    console.log("game: " + req.body.game);
});

app.listen(3000);

var ssh = new SSH({
    host: "localhost",
    user: "matt",
    pass: "my password"
});