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

function is_running() {
    // Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
    // to enable the linux subsystem, run on chris' pc
}
function kill(process, game, show_close) {
    console.log("killing: " + process + "@" + game);
    // ssh.exec('taskkill /IM ' + process + ' /F', {
    ssh.exec("ls -la", {
        out: function(stdout) {
            console.log(stdout)
        }
    }).start();
}

const games = require("data/games.json")

function turnoff(game) {
    console.log(game);
    if (game == "All Games") {
        var len = Object.keys(games).length;
        for (var m_game in games) {
            kill(games[m_game], game, false);
        }
    } else {
        kill(games[game], game, false);
    }
}
