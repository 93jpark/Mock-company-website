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
        update();
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
    document.querySelector(".btn-sort").style.visibility = "visible";
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
        document.querySelector(".table").innerHTML += str;
    });
    document.querySelector("#foodName").value = "";
    document.querySelector("#price").value = 1;
    document.querySelector("#qty").value = 0;
}

function nameSort() {
    
    database.sort(dynamicSort("name"));
    update()

     function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}

function priceSort() {
    
    database.sort(dynamicSort("price"));
    update()

     function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}