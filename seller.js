let sellers = [
    {
      "username":"agarwal",
      "password":"seller1"
    },
    {
      "username":"appario",
      "password":"seller2"
    },
    {
      "username":"cocoblu",
      "password":"seller3"
    },
    {
      "username":"harpa",
      "password":"seller4"
    },
    {
      "username":"justshop",
      "password":"seller5"
    },
    {
      "username":"nyra",
      "password":"seller6"
    },
    {
      "username":"sharmaji",
      "password":"seller7"
    },
]

function checkSeller() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    seller = sellers.find((obj) => obj.username == username && obj.password == password);
    if(seller){
        window.location.href = `/${seller.username}.html`;
    }
    else{
        alert("Incorrect username or password");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}