// Confirm Password Validation
function validatePasswords(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.display = "block";
    }

    console.log("run it back");
}