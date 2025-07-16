$(document).ready(function(){
            $("#navbar").load("navbar.html", function() {
                console.log("Navbar loaded successfully.");
            });
            if(localStorage.getItem("login")){
                $("#signinout").text("Sign Out");
                $("#signinout").attr("href", "index.html");
                $("#signinout").on("click", function() {
                    tempSignOut();
                });
                $('#signhome').text("User Home")
                $('#signhome').attr("href", "user-home.html");
            } else {
                $("#signinout").text("Sign Up");
                $("#signinout").attr("href", "signup.html");
                $("#signhome").show();
            }
});


function tempSignOut() {
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    window.location.href = "index.html";
}