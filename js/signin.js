document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            localStorage.setItem("username", username);
            localStorage.setItem("login", "true");
            console.log("SUBMITTED");
            setTimeout(function() {
                window.location.href = "user-home.html";
            }, 100);
        });
    }
});
