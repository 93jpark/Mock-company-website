function calculate() {
    var total = 0;
    var prices = [5,7,9,10,17,15,17,13,12,8,11,13];
    var inputs = document.querySelectorAll(".menu-item");
    
    for(var index = 0; index < prices.length; index++){
        total += inputs[index].value * prices[index];
    }

    document.querySelector("#result").innerHTML = total;
}