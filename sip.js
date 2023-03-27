function calculate() {
    var investmentAmount = Number(document.getElementById("investmentAmount").value);
    var investmentPeriod = Number(document.getElementById("investmentPeriod").value);
    var rateOfReturn = Number(document.getElementById("rateOfReturn").value);
  
    var monthlyInvestment = investmentAmount / (investmentPeriod * 12);
    var totalInvestment = investmentAmount;
    var totalReturns = 0;
  
    for (var i = 1; i <= investmentPeriod * 12; i++) {
      totalInvestment += monthlyInvestment;
      var returns = (totalInvestment * rateOfReturn) / 1200;
      totalReturns += returns;
      totalInvestment += returns;
    }
  
    var result = document.getElementById("result");
    result.innerHTML = "Total investment: " + totalInvestment.toFixed(2) + "<br>" +
                       "Total returns: " + totalReturns.toFixed(2) + "<br>" +
                       "Total amount: " + (totalInvestment + totalReturns).toFixed(2);
  }
  