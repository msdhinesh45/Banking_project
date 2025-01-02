    // Accessing a form
    
    document.querySelector(".withdraw-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // geting input values and storing to variable

        const account = document.getElementById("account").value.trim();
        const withdrawAmount = parseFloat(document.getElementById("amount").value.trim());  //Amount will be converting as float

        //Entered wrong acc number or withdraw ammount is negative 
        if (!account || isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("Please enter a valid account number and withdrawal amount.");
            return;
        }

        // Retrieve the account data from local storage
        let accounts = JSON.parse(localStorage.getItem("accounts")) || {};

        // Check if the account exists
        if (!accounts[account]) {
            alert("Account not found. Please make sure the account number is correct.");
            return;
        }

        // Check if the account has enough balance
        if (accounts[account].balance < withdrawAmount) {
            alert(`Insufficient balance. Current balance: ₹${accounts[account].balance}`);
            return;
        }

        // Deduct the withdrawal amount from the account balance
        accounts[account].balance -= withdrawAmount;

        // Update the account data in local storage
        localStorage.setItem("accounts", JSON.stringify(accounts));

        alert(`Successfully withdrew ₹${withdrawAmount} from account ${account}. Current balance: ₹${accounts[account].balance}`);
        document.querySelector(".withdraw-form").reset();
    });

