console.log("signup.js connected");


function signup(email, pwsd){

    firebase.auth().createUserWithEmailAndPassword(email, pwsd);


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
    window.location.href = "./confirm.html";

}

function validation() {
    document.querySelector("#error_msg").innerHTML = "";
    var error = "";
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
        error+="Name<br>";
        //alert("Name is empty");
        $("#firstName").focus();
        flag = false;
    }

    if(!(pwsd === conf)){
        error+="Password<br>";
        $("#inputPassword").focus();
        //alert("Password is empty");
        flag = false;
    }

    if(email === ""){
        error+="Email<br>";
        $("#inputEmail").focus();
        flag = false;
    }

    if(phone === ""){
        error+="Phone<br>";
        $("#inputPhone").focus();
        flag = false;
    }

    if(state === ""){
        error+="State<br>";
        $("#inputState").focus();
        flag = false;
    }

    if(zip === ""){
        error+="Zip<br>";
        $("#inputZip").focus();
        flag = false;
    }

    if(flag){
        signup(email, pwsd);
    } else {
        document.querySelector("#error_msg").innerHTML = "Please fill out following field..<br>";
        document.querySelector("#error_msg").innerHTML += error;
    }
    
}

window.onload = function() {

};