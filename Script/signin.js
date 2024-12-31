// Clciking Event

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

// To getting input Values

    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

// Retriving stored values

    const storedUserDetails = JSON.parse(localStorage.getItem("Account Details"));   // Parse() is converting string to object     //getItem() is retriving stored data


// Checking input value is there in local storage or not

    if (!storedUserDetails) {
        alert("No account found. Please sign up first.");
        return;
    }

    // checking localstorage and input values matching or not

    if (
        (enteredUsername === storedUserDetails.username ||
            enteredUsername === storedUserDetails.email ||
            enteredUsername === storedUserDetails.phoneNumber) &&
        enteredPassword === storedUserDetails.password
    ) {
        alert("Login Successful!");

        // login completed deposit page will open

        window.location.href = "deposit.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
