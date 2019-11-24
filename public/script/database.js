console.log("database is connected");
if(this.getCookie("userName")===""){
    console.log("no signed-in");
    document.querySelector("#menu_signout").style.display="none";
} else {
    document.querySelector("#menu_signin").style.display="none";
    document.querySelector("#menu_signup").style.display="none";
    console.log("user logged-in");
}

var member = {
    fname: "",
    lname: "",
    email: "",
    pswd: ""
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if(user != "") {
        alert("Welcome again " + user);
    }else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delCookie(){
    document.cookie="userName=";
    document.cookie="userEmail=";
}

window.onload = function() {

    
    
};