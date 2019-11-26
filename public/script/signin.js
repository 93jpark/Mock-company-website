console.log("signin.js connected");


firebase.auth().onAuthStateChanged(function (user){
    if(user){
        document.querySelector(".form-signin").style.display = "none";
        document.querySelector(".loggedin").style.display = "inline";
        document.querySelector(".loggedin").style.width = "75vh";
        var user = firebase.auth().currentUser;

        if (user) {
            var userId = user.email.split("@",1)
            document.querySelector("#greeting").innerHTML = "Welcome, "+userId;
            document.cookie="userName="+userId;
            
        } else {
        // No user is signed in.
        }

    } else {
        
    }
});

function login(){
    var userEmail = document.querySelector("#inputEmail").value
    var userPass = document.querySelector("#inputPassword").value

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

    // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //     // Handle Errors here.
    //     alert(error.message);
    //     // ...
    //   });    
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

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

window.onload = function() {

    //$("#btnSignin").click(this.validation);
    
};