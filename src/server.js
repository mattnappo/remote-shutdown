const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const SSH = require("simple-ssh");

var app = express();
app.use(express.static(__dirname + "/static"));

app.post("/", function (req, res, next) {
    var r = JSON.parse(req);
    console.log("body: " + r);
    console.log("data: " + r.data);
});

app.listen(3000);

var ssh = new SSH({
    host: "localhost",
    user: "matt",
    pass: "my password"
});