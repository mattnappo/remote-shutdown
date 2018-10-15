const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const SSH = require("simple-ssh");
const server = require("./server.json");

var app = express();
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/close", function (req, res, next) {
    turnoff(req.body.game);
});

app.listen(3000);

var ssh = new SSH({
    host: server.host,
    user: server.user,
    pass: server.pass
});

function kill(process, game, show_close) {
    // ssh.exec('taskkill /IM ' + process + ' /F', {
    ssh.exec("ls -la", {
        out: function(stdout) {
            console.log(stdout)
        }
    }).start();
    if (show_close) {
        // new_modal(game + " has been closed successfully.");
    }
}
const games = {
    "Discord": "discord.exe",
    "Rainbow Six": "RainbowSix.exe",
    "Fortnite": "something",
    "Battlefield 1": "bf1.exe",
    "PUBG": "TslGame.exe",
    "CSGO": "csgo.exe"
};

function turnoff(game) {
    console.log(game);
    if (game == "all") {
        var len = Object.keys(games).length;
        for (var m_game in games) {
            kill(games[m_game], false);
        }
        // new_modal("All Games have been closed successfully.");
    } else {
        kill(games[game], false);
    }
}
