const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const SSH = require("simple-ssh");

const server = require("./data/server.json");
const games = require("./data/games.json");

process.on('uncaughtException', function (err) {
    console.error(err);
});

var app = express();
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/close", function (req, res, next) {
    turnoff(req.body.game);
});

var ssh = new SSH({
    host: server.host,
    user: server.user,
    pass: server.pass
});

function is_running() {
    // Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
    // to enable the linux subsystem, run on chris' pc
}

function kill(process, game) {
    console.log("killing: " + process + " @ " + game);
    try {
        ssh.exec('taskkill /IM ' + process + ' /F', {
        // ssh.exec("ls -la", {
            out: function(stdout) {
                console.log(stdout);
            }
        }).start();
    }
    catch (err) {
        console.error(err.message);
    }
}

function turnoff(game) {
    if (game == "All Games") {
        var len = Object.keys(games).length;
        for (var m_game in games) {
            kill(games[m_game], game);
        }
    } else {
        kill(games[game], game);
    }
}

app.listen(3000);