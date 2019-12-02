var database = [];

function add() {
    var name = document.querySelector("#foodName").value;
    var price = document.querySelector("#price").value;
    var qty = document.querySelector("#qty").value;

    if(validate()){
        var item = {
            name: name,
            price: price,
            qty: qty
        };

        database.push(item);
        var str = "<div class=\"row\">";
        str += "<div class=\"col\">";
        str += "Name";
        str += "</div>";
        str += "<div class=\"col\">";
        str += "Price";
        str += "</div>";
        str += "<div class=\"col\">";
        str += "Qty";
        str += "</div>";
        str += "</div>";
        document.querySelector(".table").innerHTML=str;

        update();
        // var str = "<div class=\"row\">";
        // str += "<div class=\"col\">";
        // str += name;
        // str += "</div>";
        // str += "<div class=\"col\">";
        // str += price;
        // str += "</div>";
        // str += "<div class=\"col\">";
        // str += qty;
        // str += "</div>";
        // str += "</div>";
        // str += "\n";
        //document.querySelector(".table").innerText += str;
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

function update() {
    database.forEach(function(item){
        var str = "<div class=\"row\">";
        str += "<div class=\"col\">";
        str += item.name;
        str += "</div>";
        str += "<div class=\"col\">";
        str += item.price;
        str += "</div>";
        str += "<div class=\"col\">";
        str += item.qty;
        str += "</div>";
        str += "</div>";
        // var str = "";
        // str += item.name;
        // str += ", "+item.price;
        // str += " : "+item.qty+"<br>";
        console.log(str);
        document.querySelector(".table").innerHTML += str;
    });

}