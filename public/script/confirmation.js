function load(){
    document.querySelector("#name").innerHTML = getCookie("c_fName")+" "+getCookie("c_lName");
    document.querySelector("#email").innerHTML  = getCookie("c_email");
    document.querySelector("#phone").innerHTML  = getCookie("c_phone");
    document.querySelector("#zip").innerHTML  = getCookie("c_zip");
    document.querySelector("#state").innerHTML  = getCookie("c_state");
    document.querySelector("#cType").innerHTML  = getCookie("c_cType");
    document.querySelector("#pType").innerHTML  = getCookie("c_pType");
}

function proceed() {
    setCookie("c_fName","");
    setCookie("c_lName","");
    setCookie("c_email","");
    setCookie("c_phone","");
    setCookie("c_state","");
    setCookie("c_zip","");
    setCookie("c_cType","");
    setCookie("c_pType","");
    window.location.pathname = "../pages/signin.html";
}

window.onload = function() {

    this.load()
};