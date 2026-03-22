function validateRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("error").innerText = "All fields required!";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("error").innerText = "Password must be 6+ characters";
        return false;
    }

    return true;
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        document.getElementById("loginError").innerText = "All fields required!";
        return false;
    }

    return true;
}