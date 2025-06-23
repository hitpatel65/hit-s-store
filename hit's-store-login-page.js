function showRegister() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
}

function showLogin() {
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;

    if (username === "" || password === "") {
        document.getElementById("register-message").innerText = "Please fill all fields!";
        return;
    }

    if (localStorage.getItem(username)) {
        document.getElementById("register-message").innerText = "Username already exists!";
        return;
    }

    localStorage.setItem(username, password);
    document.getElementById("register-message").innerText = "Registration successful! You can now login.";
    setTimeout(showLogin, 2000);
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        document.getElementById("login-message").innerText = "Please fill all fields!";
        return;
    }

    let storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        document.getElementById("login-message").innerText = "Login successful!";
        alert("Welcome, " + username + "!");
    } else {
        document.getElementById("login-message").innerText = "Invalid credentials!";
    }
}
