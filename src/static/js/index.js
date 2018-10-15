function create_game_div(game, playing, all = false) {
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
    if (playing && !all) p.innerHTML = "Status: Playing";
    if (!playing && !all) p.innerHTML = "Status: Not Playing";
    
    var button = document.createElement("button");
    button.className = "w3-btn w3-ripple w3-pink closer";
    button.id = game;
    button.innerHTML = "Turn off"
    button.onclick = function () {
        console.log("clicked " + game);
    }

    section.appendChild(h4);
    section.appendChild(p);
    section.appendChild(button);

    container.append(section);
    games.appendChild(container);

}

var game_count;
function init() {
    create_game_div("All Games", false, true);
    create_game_div("Discord", false);
    create_game_div("Rainbow Six", false);
    create_game_div("Fortnite"), false;
    create_game_div("Battlefield 1", false);
    create_game_div("PUBG", false);
    create_game_div("CSGO", false);
}

$(document).on("click", ".closer", function () {
    var clicked_game = $(this).attr("id");
    $.post("/close", {game: clicked_game}, function (game) {
        alert(game);
    });
});

function new_modal(text) {
    document.getElementById()
}

init();