const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Amazon');

const product = require("./models/Product.js");
const seller = require("./models/Seller.js");

const app = express();
app.use(express.static(__dirname));
app.use(express.static(__dirname+"/Sellers"));
app.use(express.static(__dirname+"/Categories"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/", async (req,res)=>{
    res.sendFile(path.join(__dirname,'/Categories/electronics.html'));
});

// rest apis
app.get("/products", (req, res) => {
    product.find((err, foundProducts) => {
        if (!err) {
            res.send(foundProducts)
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
app.post('/agarwal',async (req,res)=>{

    // brand licence request
    if(req.body.username){
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/agarwal.html')); 
    }

    // add item request
    else{
        // checking same item is present or not
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }

        // adding new item
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/agarwal.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.post('/appario',async (req,res)=>{
    if(req.body.username){
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/appario.html')); 
    }
    else{
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/appario.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.post('/cocoblu',async (req,res)=>{
    if(req.body.username){
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/cocoblu.html')); 
    }
    else{
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/cocoblu.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.post('/harpa',async (req,res)=>{
    if(req.body.username){
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/harpa.html')); 
    }
    else{
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/harpa.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.post('/justshop',async (req,res)=>{
    if(req.body.username){
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/justshop.html')); 
    }
    else{
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/justshop.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.post('/nyra',async (req,res)=>{
    if(req.body.username){
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/nyra.html')); 
    }
    else{
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/nyra.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.post('/sharmaji',async (req,res)=>{
    if(req.body.username){
        console.log("a");
        let temp = new seller(req.body);
        await seller.findOneAndUpdate({username: temp.username}, {certified:true});
        res.sendFile(path.join(__dirname,'Sellers/sharmaji.html')); 
    }
    else{
        let check = await product.findOne({productname: req.body.productname, seller: req.body.seller});
        if(check && check.price != req.body.price){
            res.sendFile(path.join(__dirname,'warning.html'));
        }
        else{
            let temp = new product(req.body);
            temp.save().then(()=>{
                res.sendFile(path.join(__dirname,'Sellers/sharmaji.html')); 
            }).catch((err)=>{
                res.send("These Details already belong to a user");
            });
        }
    }
})
app.listen(8000,()=>{
    console.log("Connencted http://localhost:8000")
})