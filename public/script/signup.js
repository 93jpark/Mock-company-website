console.log("signup.js connected");

function validation(){
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var email = $("#inputEmail").val();
    var pwsd = $("#inputPassword").val();
    var conf = $("#confirm").val();

    if(isEmpty(fName) || isEmpty(lName)){
        $("#error_msg").html("Enter The Name");
        console.log("name");
        return false;
    }

    if(isEmpty(email)){
        $("#error_msg").html("Enter The Email");
        console.log("email");
        return false;
    }

    if(isEmpty(pwsd) || isEmpty(conf)){
        $("#error_msg").html("Enter The Password");
    }

    if(!(pwsd === conf)){
        $("#error_msg").html("Invalid Password");
        return false;
    }

    
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(email)){
        
    }else{
        $("#error_msg").html("Wrong Email Format");
    }
    

}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

window.onload = function() {

    $("#btnSignup").click(this.validation);
    
};