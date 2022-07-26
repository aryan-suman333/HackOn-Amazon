async function checkSeller() {
    let jso = await fetch('http://localhost:8000/sellers');
    sellers = await jso.json();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    seller = sellers.find((obj) => obj.username == username && obj.password == password);
    if (seller) {
        window.location.href = `../Sellers/${seller.username}.html`;
    }
    else {
        alert("Incorrect username or password");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}