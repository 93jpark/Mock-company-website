document.addEventListener("DOMContentLoaded", function() {
    alert("external level javascript working");
        });
var quantity =  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
var price = ["5", "7", "9", "10", "17", "15", "13", "12", "8", "11", "13", "9"];
var Food =  ["Potato Skins", "Pigs in a blanket", "Spinach and Artichoke dip", "Another App", "Steak and Shrimp", "Partridge", "Pizza", "Cheeseburger", "Chocolate Mousse", "Molten Cake", "Hot Fudge Sundae", "Carmel Cake"];

function calculateArray(){

    alert("function working");
    quantity = [];
    quantity1 = document.getElementById("quantity1").value;
        quantity.push(quantity1);
        
        quantity2 = document.getElementById("quantity2").value;
        quantity.push(quantity2);
        
        quantity3 = document.getElementById("quantity3").value;
        quantity.push(quantity3);
        
        quantity4 = document.getElementById("quantity4").value;
        quantity.push(quantity4);
        
        quantity5 = document.getElementById("quantity5").value;
        quantity.push(quantity5);
        
        quantity6 = document.getElementById("quantity6").value;
        quantity.push(quantity6);
        
        
        quantity7 = document.getElementById("quantity7").value;
        quantity.push(quantity7);
        
        quantity8 = document.getElementById("quantity8").value;
        quantity.push(quantity8);
        
        quantity9 = document.getElementById("quantity9").value;
        quantity.push(quantity9);
        
        quantity10 = document.getElementById("quantity10").value;
        quantity.push(quantity10);
        
        quantity11 = document.getElementById("quantity11").value;
        quantity.push(quantity11);
        
        quantity12 = document.getElementById("quantity12").value;
        quantity.push(quantity12);
  
    console.log(quantity);
    var json_str = JSON.stringify(quantity);
    createCookie('orderquantity', json_str);
  
  
  }