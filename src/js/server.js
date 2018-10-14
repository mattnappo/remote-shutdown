const express = require("express");
const SSH = require("simple-ssh");
const path = require("path");

var app = express();

app.get("/", function (req, res) {
    res.sendFile(path.resolve("../index.html"));
});

app.listen(3000);

var ssh = new SSH({
    host: "localhost",
    user: "matt",
    pass: "my password"
});