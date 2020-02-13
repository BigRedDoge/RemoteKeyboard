$(document).ready(function() { 

    var socket = io();

    $("#keyboard").keypress(function(e) {
        console.log(e.key);
        socket.emit('keypress', e.key);
        
        if (e.keyCode === 13) {
            e.preventDefault();
            $("#keyboard").val("");
        }
    });

});