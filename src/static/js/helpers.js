function hide_modal(id) {
    document.getElementById(id).style.display='none';
}

function show_modal(id) {
    document.getElementById(id).style.display='block';
}

function new_message() {
    let message = document.getElementById("message-to-send").value;
    // alert(message);
    
    $.post("/message", {message: message}, function (res) {
        console.log(`res: ${res}`);
    });

    hide_modal("new-message");
    show_modal("sent");
}