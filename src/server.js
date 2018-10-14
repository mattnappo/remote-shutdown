const express = require("express");
const SSH = require("simple-ssh");
const path = require("path");

var app = express();
app.use(express.static(__dirname + "/static"));

console.log(__dirname)
app.get("/", function (req, res) {
    res.sendFile(path.resolve("src/static/index.html"));
});

app.listen(3000);

var ssh = new SSH({
    host: "localhost",
    user: "matt",
    pass: "my password"
});