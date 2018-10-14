var SSH = require('simple-ssh');
 
var ssh = new SSH({
    host: 'localhost',
    user: 'matt',
    pass: 'my password'
});

function create_game_div(game, playing) {
    var games = document.getElementById("games");

    var container = document.createElement("div");
    container.className = "w3-container w3-card-4 w3-margin-bottom";

    var section = document.createElement("div");
    section.className = "w3-section";

    var h4 = document.createElement("h4");
    h4.className = "w3-text-theme";
    h4.innerHTML = game;

    var p = document.createElement("h4");
    p.className = "w3-text-theme";
    if (playing) p.innerHTML = "Status: Playing";
    if (!playing) p.innerHTML = "Status: Not Playing";
    
    var button = document.createElement("button");
    button.className = "w3-btn w3-ripple w3-pink";
    button.innerHTML = "Shut off"
    button.setAttribute(
        "onclick",
        // "turnoff('" + game + "')"
        "console.log('hi')"
    );

    section.appendChild(h4);
    section.appendChild(p);
    section.appendChild(button);

    container.append(section);
    games.appendChild(container);

}

function init() {
    create_game_div("Discord", false);
    create_game_div("Rainbow Six", false);
    create_game_div("Fortnite"), false;
    create_game_div("Battlefield 1", false);
    create_game_div("PUBG", false);
    create_game_div("CSGO", false);
    
}

function new_modal(text) {
    document.getElementById()
}

function kill(process, game, show_close) {
    ssh.exec('taskkill /IM ' + process + ' /F', {
        out: function(stdout) {
            console.log(stdout);
        }
    }).start();
    document.getElementById();
    if (show_close) {
        new_modal(game + " has been closed successfully.");
    }
}

function turnoff(game) {
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

init();