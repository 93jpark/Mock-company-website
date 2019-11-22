console.log("signup.js connected");

function validation(){
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var email = $("#inputEmail").val();
    var pwsd = $("#inputPassword").val();
    var conf = $("#confirm").val();

    if(isEmpty(fName) || isEmpty(lName) || isEmpty(email) || isEmpty(pwsd) || isEmpty(conf)){
        document.querySelector("#").innerHTML = "you need to fill out";
        console.log("hey");
        return false;
    }

    if(!(pwsd === conf)){
        alert("invalid password");
        return false;
    }

    /*
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(valueToTest)){
        
    }else{
        alert("wrong email format");
    }
    */

}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

window.onload = function() {

    $("#btnSignup").click(this.validation);
    
};