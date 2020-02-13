$(document).ready(function() { 

    var input = $("#keyboard").text();

    $("#send").click(function() {
        console.log($("#keyboard").val());
    });

    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          // socket.io this 
          $("#keyboard").val();
        }
    });

});