// Clciking Event

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

// To getting Input values

    const fullName = document.getElementById("Full name").value.trim();     /* To removing whitespace*/
    const age = document.getElementById("age").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("Phone number").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Storing missing elements
    let missingFields = [];

    // To checking all elements are filled or not

    if (!fullName) missingFields.push("Full Name");     /* Missing values directly pusing into array */
    if (!age) missingFields.push("Age");
    if (!username) missingFields.push("Username");
    if (!email) missingFields.push("Email");
    if (!phoneNumber) missingFields.push("Phone Number");
    if (!password) missingFields.push("Password");
    if (!confirmPassword) missingFields.push("Confirm Password");

    // Showing alert msg for showing which is missing

    if (missingFields.length > 0) {
        alert("Please fill out the following fields: " + missingFields.join(", "));
        return;
    }

    // Validating password
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Creating object
    const userDetails = {       /*Object name*/
        fullName,               /*Key names*/
        age,
        username,
        email,
        phoneNumber,
        password,
    };

    // Store user data in local storage
    localStorage.setItem("Account Details", JSON.stringify(userDetails));

    alert(`Hi ${fullName}, Your account is created`);
    window.location.href = "signin.html"; // Redirect to sign-in page
});
