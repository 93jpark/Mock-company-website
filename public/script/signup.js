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
    var errors = document.querySelectorAll(".error");
    errors.forEach(function(e){
        e.innerHTML = "";
    });
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
    var cType = $("#customerType").val();
    var pType = $("#paymentType").val();

    
    if(fName === ""){
        error+="First Name<br>";
        //alert("Name is empty");
        document.querySelector("#fnameError").innerHTML=" *";
        $("#firstName").focus();
        flag = false;
    }
    
    if(lName === ""){
        error+="Last Name<br>";
        //alert("Name is empty");
        document.querySelector("#lnameError").innerHTML=" *";
        $("#lastName").focus();
        flag = false;
    }


    if(pwsd === ""){
        error+="Password<br>";
        document.querySelector("#pwsdError").innerHTML=" *";
        $("#inputPassword").focus();
        //alert("Password is empty");
        flag = false;
    }

    if(conf === ""){
        error+="Password<br>";
        
        document.querySelector("#confError").innerHTML=" *";
        $("#inputPassword").focus();
        //alert("Password is empty");
        flag = false;
    }

    if(email === ""){
        error+="Email<br>";
        document.querySelector("#emailError").innerHTML=" *";
        
        $("#inputEmail").focus();
        flag = false;
    }

    if(phone === ""){
        error+="Phone<br>";
        document.querySelector("#phoneError").innerHTML=" *";
        $("#inputPhone").focus();
        flag = false;
    }

    if(state === ""){
        error+="State<br>";
        $("#inputState").focus();
        document.querySelector("#stateError").innerHTML=" *";
        flag = false;
    }

    if(zip === ""){
        error+="Zip<br>";
        document.querySelector("#zipError").innerHTML=" *";
        $("#inputZip").focus();
        flag = false;
    }

    if(flag){
        setCookie("c_fName",fName);
        setCookie("c_lName",lName);
        setCookie("c_email",email);
        setCookie("c_phone",phone);
        setCookie("c_state",state);
        setCookie("c_zip",zip);
        setCookie("c_cType",cType);
        setCookie("c_pType",pType);

        signup(email, pwsd);
        window.location.pathname = "../pages/confirmation.html";
    } else {
        document.querySelector("#error_msg").innerHTML = "Please fill out empty field<br>";
        //document.querySelector("#error_msg").innerHTML += error;
    }
}

function move(){
    window.location.pathname = "../pages/confirmation.html";

}
    


window.onload = function() {

};