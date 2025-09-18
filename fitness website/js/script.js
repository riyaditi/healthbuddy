// Simulate authentication (No database, just localStorage for now)
function authenticateUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("userEmail", email); // Store email in local storage
        alert("Login successful! Redirecting...");
        window.location.href = "home.html"; // Redirect to Home
    } else {
        alert("Please enter valid credentials.");
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("userEmail");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// Ensure user is logged in before accessing Home
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("home.html")) {
        let userEmail = localStorage.getItem("userEmail");
        if (!userEmail) {
            alert("Please log in first.");
            window.location.href = "login.html";
        }
    }
});
