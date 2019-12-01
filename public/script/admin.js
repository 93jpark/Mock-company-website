function add() {
    var name = document.querySelector("#foodName").value;
    var price = document.querySelector("#price").value;
    var qty = document.querySelector("#qty").value;
    if(validate()){
        document.querySelector(".table").innerHTML += "hello";
    }
}

function validate() {
    document.querySelector("#error_msg").innerHTML = "";
    if(document.querySelector("#foodName").value === ""){
        document.querySelector("#error_msg").innerHTML = "Need food name"
        return false;
    }
    return true;
}