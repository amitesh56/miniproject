
function calculate() {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var duration = document.getElementById("duration").value;
    
    var total = parseFloat(amount) + (parseFloat(amount) * parseFloat(interest) * parseFloat(duration) / 100);
    document.getElementById("result").innerHTML = "Total Amount: " + total.toFixed(2);
  }

