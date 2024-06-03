// function calculateLoan() {
//     // Retrieve the input values
//     const loanAmount = document.getElementById("loan-amount").value;
//     const interestRate = document.getElementById("Interest-rate").value;
//     const monthsToPay = document.getElementById("time-to-pay").value;

//     // console.log(loanAmount, interestRate, monthsToPay);

//     // Calculate interest and monthly payment
//     const interest = (loanAmount * interestRate * 0.01) / monthsToPay;
//     const monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

    

//     // Get the payment element and update its innerHTML
//     const paymentElement = document.getElementById("payment");
//     if (paymentElement) {
//         paymentElement.innerHTML = `Monthly Payment: ${monthlyPayment}`;
//     } else {
//         console.error("Element with ID 'payment' not found.");
//     }
// }

function calculateLoan() {
    // Retrieve the input values
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("Interest-rate").value);
    const monthsToPay = parseInt(document.getElementById("time-to-pay").value);

    // Debugging logs
    console.log("Loan Amount:", loanAmount);
    console.log("Interest Rate:", interestRate);
    console.log("Months to Pay:", monthsToPay);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay)) {
        console.error("Invalid input values.");
        return;
    }

    // Calculate interest and monthly payment
    const interest = (loanAmount * interestRate * 0.01) / monthsToPay;
    const monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

    console.log("Interest:", interest);
    console.log("Monthly Payment:", monthlyPayment);

    // Get the payment element and update its innerHTML
    const paymentElement = document.getElementById("payment");
    if (paymentElement) {
        paymentElement.innerHTML = `Monthly Payment: ${monthlyPayment}`;
    } else {
        console.error("Element with ID 'payment' not found.");
    }
}

// Ensure the JavaScript file is correctly linked and loaded
console.log("App.js loaded successfully");

