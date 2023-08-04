const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Amazon');

const product = require("./models/Product.js");
const seller = require("./models/Seller.js");

const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/Sellers"));
app.use(express.static(__dirname + "/Categories"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, '/Categories/electronics.html'));
});

// rest apis
app.get("/products", (req, res) => {
    product.find((err, found) => {
        if (!err) {
            res.send(found)
        } else {
            res.send(err);
        }
    })
})
app.get("/sellers", (req, res) => {
    seller.find((err, found) => {
        if (!err) {
            res.send(found)
        } else {
            res.send(err);
        }
    })
})

// updating database for every seller
let username = "";
let updateDB = async (req, res) => {

    // brand licence request
    if (req.body.username) {
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({ username: temp.username }, { certified: true });
        res.sendFile(path.join(__dirname, `Sellers${username}.html`));
    }

    // add item request
    else {
        // checking same item is present or not
        let check = await product.findOne({ productname: req.body.productname, seller: req.body.seller });
        if (check && check.price != req.body.price) {
            res.sendFile(path.join(__dirname, 'warning.html'));
        }

        // adding new item
        else {
            let temp = new product(req.body);
            await temp.save();
            res.sendFile(path.join(__dirname, `Sellers${username}.html`));
        }
    }
};

app.post(username = '/nyra', updateDB);
app.post(username = '/cocoblu', updateDB);
app.post(username = '/harpa', updateDB);
app.post(username = '/appario', updateDB);
app.post(username = '/justshop', updateDB);
app.post(username = '/sharmaji', updateDB);
app.post(username = '/agarwal', updateDB);

app.listen(8000, () => {
    console.log("Connencted http://localhost:8000")
})