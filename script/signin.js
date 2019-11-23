console.log("signin.js connected");

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

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

window.onload = function() {

    $("#btnSignin").click(this.validation);
    
};