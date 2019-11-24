console.log("signup.js connected");

function signup(){

        var fName = $("#firstName").val();
        var lName = $("#lastName").val();
        var email = $("#inputEmail").val();
        var pwsd = $("#inputPassword").val();
        var conf = $("#confirm").val();

    firebase.auth().createUserWithEmailAndPassword(email, pwsd).catch(function(error) {
        // Handle Errors here.
        alert(error.message);
        // ...
    });


    firebase.auth().signInWithEmailAndPassword(email, pwsd).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

window.onload = function() {

};