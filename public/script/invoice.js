var s  = getCookie("arr");
var sArr = s.split(",");
var total = getCookie("total");
console.log(sArr);
 var name = getCookie("userName");
var l = getCookie("location");
var c = getCookie("city");
var cardNumber = getCookie("cardNumber");

var q1 = sArr[0];
var q2 = sArr[1];
var q3 = sArr[2];
var q4 = sArr[3];
var q5 = sArr[4];
var q6 = sArr[5];
var q7 = sArr[6];
var q8 = sArr[7];
var q9 = sArr[8];
var q10 = sArr[9];
var q11 = sArr[10];
var q12 = sArr[11];
showInvoice();
setDate();
setInvoiceNumber();

function showInvoice(){
    document.getElementById("p1").innerHTML = q1;
    document.getElementById("p2").innerHTML = q2;
    document.getElementById("p3").innerHTML = q3;
    document.getElementById("p4").innerHTML = q4;
    document.getElementById("p5").innerHTML = q5;
    document.getElementById("p6").innerHTML = q6;
    document.getElementById("p7").innerHTML = q7;
    document.getElementById("p8").innerHTML = q8;
    document.getElementById("p9").innerHTML = q9;
    document.getElementById("p10").innerHTML = q10;
    document.getElementById("p11").innerHTML = q11;
    document.getElementById("p12").innerHTML = q12;
    document.getElementById("totalPrice").innerHTML = total;
     document.getElementById("name").innerHTML = name;
    document.getElementById("location").innerHTML = l;
    document.getElementById("city").innerHTML = c;
    document.getElementById("cardNumber").innerHTML = cardNumber;

}

function setDate(){
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("createDate").innerHTML = today;
}

function setInvoiceNumber(){
    var num = Math.floor(Math.random() * 10000000000000);
    document.getElementById("number").innerHTML = num;
}

