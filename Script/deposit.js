// Accessing a form     //querySeletor used for easy to html elements comparing to id and class selector

document.querySelector(".deposit-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

    // getting and storing input values

        const account = document.getElementById("account").value.trim();
        const depositAmount = parseFloat(document.getElementById("amount").value.trim());

    // checking Account number is number and deposit amount is not negative number

        if (!account || isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid account number and deposit amount.");
            return;
        }

        // Retrieve the account data from local storage
        let accounts = JSON.parse(localStorage.getItem("accounts")) || {};

        // Check if the account already exists
        if (!accounts[account]) {
            accounts[account] = { balance: 0 }; // Initialize the account with a balance
        }

        // Add the deposit amount to the account balance
        accounts[account].balance += depositAmount;

        // Update the account data in local storage
        localStorage.setItem("accounts", JSON.stringify(accounts));

        alert(`Successfully deposited ₹${depositAmount} to account ${account}. Current balance: ₹${accounts[account].balance}`);
        document.querySelector(".deposit-form").reset();
    });