const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const SSH = require("simple-ssh");

var app = express();
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/close", function (req, res, next) {
    turnoff(req.body.game);
});

app.listen(3000);

var ssh = new SSH({
    host: "localhost",
    user: "matt",
    pass: "my password"
});

function kill(process, game, show_close) {
    ssh.exec('taskkill /IM ' + process + ' /F', {
        out: function(stdout) {
            console.log("KILLED " + game);
            console.log(stdout);
        }
    }).start();
    if (show_close) {
        // new_modal(game + " has been closed successfully.");
    }
}

function turnoff(game) {
    console.log(game);
    if (game == "all") {
        kill("RainbowSix.exe", true);
        console.log("Can't close fortnite right now.");
        kill("bf1.exe", true);
        kill("TslGame.exe", true);
        kill("csgo.exe", true);
        new_modal("All Games have been closed successfully.");
    }

    if (game == "Discord") kill("notepad.exe", "Discord", true);
    if (game == "Rainbow Six") kill("RainbowSix.exe", "Rainbow Six", true);

    if (game == "Fortnite") console.log("Can't close fortnite right now.");
    
    if (game == "Battlefield 1") kill("bf1.exe", "Battlefield 1", true);
    if (game == "PUBG") kill("TslGame.exe", "PUBG", true);
    if (game == "CSGO") kill("csgo.exe", "Counter Strike: Global Offensive", true);
}
