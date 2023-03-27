
function calculateInvestment() {
    let age = parseInt(document.getElementById("age").value);
    let amount = parseInt(document.getElementById("amount").value);
  
    let suggestion;
  
    if (age < 30) {
      suggestion = "Stocks = 70%, Gold Bonds = 10% , Government bonds = 20% ";
    } else if (age < 50) {
      suggestion = "Stocks = 40%,  Gold Bonds = 30%, Government bonds = 30% ";
    } else {
      suggestion = "Stocks = 20%, Gold Bonds = 40%, Government bonds = 40% .";
    }
  
    document.getElementById("result").innerHTML = suggestion;
  }
  