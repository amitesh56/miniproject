
function calculateTax(event) {
    event.preventDefault();

    // Get input values
    const income = Number(document.getElementById("income").value);
    const age = Number(document.getElementById("age").value);

    // Calculate tax
    let tax;
    if (income <= 250000) {
        tax = 0;
    } else if (income > 250000 && income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income > 500000 && income <= 1000000) {
        tax = 12500 + (income - 500000) * 0.2;
    } else {
        tax = 112500 + (income - 1000000) * 0.3;
    }

    // Reduce tax by 10% for senior citizens (age >= 60) and by 15% for super senior citizens (age >= 80)
    if (age >= 60) {
        if (age >= 80) {
            tax *= 0.85;
        } else {
            tax *= 0.9;
        }
    }

    // Display results
    document.getElementById("incomeResult").textContent = income;
    document.getElementById("ageResult").textContent = age;
    document.getElementById("taxResult").textContent = tax.toFixed(2);
    document.getElementById("result").style.display = "block";
}