console.log("signup.js connected");


function signup(email, pwsd){

    firebase.auth().createUserWithEmailAndPassword(email, pwsd).catch(function(error) {
        // Handle Errors here.
        alert(error.message);
        // ...
    });


        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function validation() {

    var flag = true;

    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var email = $("#inputEmail").val();
    var pwsd = $("#inputPassword").val();
    var conf = $("#confirm").val();
    var phone = $("#inputPhone").val();
    var state = $("#inputState").val();
    var zip = $("#inputZip").val();
    
    if(fName === "" || lName === ""){
        alert("Name is empty");
        $("#firstName").focus();
        flag = false;
    }

    if(!(pwsd === conf)){
        $("#inputPassword").focus();
        alert("Password is empty");
        flag = false;
    }

    if(email === ""){
        alert("Email is empty");
        $("#inputEmail").focus();
        flag = false;
    }

    if(phone === ""){
        alert("Phone is empty");
        $("#inputPhone").focus();
        flag = false;
    }

    if(state === ""){
        alert("State code is empty");
        $("#inputState").focus();
        flag = false;
    }

    if(zip === ""){
        alert("Zip Code is empty");
        $("#inputZip").focus();
        flag = false;
    }

    if(flag){
        signup(email, pwsd);
        
    }
    
}

window.onload = function() {

};