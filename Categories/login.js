let sellers = [
    {
      "username":"agarwal",
      "password":"seller1",
      "certified": false
    },
    {
      "username":"appario",
      "password":"seller2",
      "certified": false
    },
    {
      "username":"cocoblu",
      "password":"seller3",
      "certified": false
    },
    {
      "username":"harpa",
      "password":"seller4",
      "certified": false
    },
    {
      "username":"justshop",
      "password":"seller5",
      "certified": false
    },
    {
      "username":"nyra",
      "password":"seller6",
      "certified": false
    },
    {
      "username":"sharmaji",
      "password":"seller7",
      "certified": false
    },
]

function checkSeller() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    seller = sellers.find((obj) => obj.username == username && obj.password == password);
    if(seller){
        window.location.href = `../Sellers/${seller.username}.html`;
    }
    else{
        alert("Incorrect username or password");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}