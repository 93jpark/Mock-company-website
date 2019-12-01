console.log("signin.js connected");

if(this.getCookie("userName")===""){
    document.querySelector(".form-signin").style.visibility = "visible";
    document.querySelector(".loggedin").style.visibility = "hidden";
} else {
    document.querySelector(".form-signin").style.visibility = "hidden";
    document.querySelector(".loggedin").style.visibility = "visible";
}

firebase.auth().onAuthStateChanged(function (user){
    if(user){
        console.log("hit");
        document.querySelector(".form-signin").style.visibility = "hidden";
        document.querySelector(".loggedin").style.visibility = "visible";
        // document.querySelector(".loggedin").style.width = "75vh";
        var user = firebase.auth().currentUser;

        if (user) {
            var userId = user.email.split("@",1)
            document.querySelector("#greeting").innerHTML = "Welcome, "+userId;
            document.cookie="userName="+userId;
            
        } else {
        // No user is signed in.
        }

    }
});

function login(){
    validate();
    var userEmail = document.querySelector("#inputEmail").value
    var userPass = document.querySelector("#inputPassword").value

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
    })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });

    // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //      // Handle Errors here.
    //      alert(error.message);
    //      // ...
    //    });    
}

function signout(){
    firebase.auth().signOut().then(function() {
        alert("sucessfully signed-out");
        location.reload(true);
        document.querySelector(".form-signin").style.display = "initial";
        document.querySelector(".loggedin").style.display = "none";
        document.querySelector(".form-signin").style.width = "50%";
        document.cookie="userName=";
        document.cookie="userEmail=";
      }).catch(function(error) {
        alert("you didn't sign-in");
      });
}

function validate(){
    if(document.querySelector("#inputEmail").value===""){
        document.querySelector("#emailError").innerHTML=" *";
    }
    if(document.querySelector("#inputPassword").value===""){
        document.querySelector("#passwordError").innerHTML=" *";
    }
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

window.onload = function() {

    //$("#btnSignin").click(this.validation);
    
};