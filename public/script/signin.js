console.log("signin.js connected");

firebase.auth().onAuthStateChanged(function (user){
    if(user){
        document.querySelector(".form-signin").style.display = "none";
        document.querySelector(".loggedin").style.display = "initial";
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


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        alert(error.message);
        // ...
      });    
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