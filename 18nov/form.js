const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "" || pass === "") {
        alert("All fields are required!"); }
    else if (pass.length < 6) {
        alert("Password must be at least 6 characters long!")
    }
    else {
        alert("Login successful!");
        form.reset();
    }
})