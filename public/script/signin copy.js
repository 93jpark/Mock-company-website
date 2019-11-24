alert("NEW signin.js connected");

firebase.auth().onAuthStateChanged(function (user){
    if(user){
        document.querySelector(".form-signin").style.display = none;
        document.querySelector(".loggedin").style.display = initial;
    } else {
        
    }
});

function login(){
    var userEmail = document.querySelector("#inputEmail").val()
    var userPass = document.querySelector("#inputPassword").val()

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.code+error.message);
        // ...
      });    
}

/*
function validation(){
    var email = $("#inputEmail").val();
    var pwsd = $("#inputPassword").val();

    if(isEmpty(email)){
        $("#error_msg").html("Enter The Email");
        console.log("email");
        return false;
    }

    if(isEmpty(pwsd)){
        $("#error_msg").html("Enter The Password");
    }

    
    // if(!(pwsd === conf)){
    //     $("#error_msg").html("Invalid Password");
    //     return false;
    // }

    
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(email)){
        $("#error_msg").html("Wrong Email Format")
    }else{
        
    }
    

}
*/

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

window.onload = function() {

    //$("#btnSignin").click(this.validation);
    
};