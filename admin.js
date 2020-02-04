let loginAdmin = () => {
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");

    event.preventDefault();

    let login = () => {
        if ((userName.value == "admin@admin") && (password.value == "admin")) {
            document.location.href = "lk.html";
            return true;
        }
        return false;
    }

    login();
}