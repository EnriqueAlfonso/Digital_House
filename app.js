const fs = require("fs");
const express = require("express");
const app = express();

const path = require("path");
const path_public = path.resolve("./public");

const indexController = require("./controllers/indexController");
const productController = require("./controllers/productController");
const subscribeController = require("./controllers/subscribeController");
const loginController = require("./controllers/loginController");
const basketController = require("./controllers/basketController");

app.listen(3000, console.log("Port: 3000"));

app.use(express.static(path_public));

app.get("/", indexController.print);

app.get("/subscribe", (req, res) => {
    let path_subscribe = path.resolve(__dirname, "./views/subscribe.html");

    res.sendFile(path_subscribe);
});

app.get("/login", (req, res) => {
    let path_login = path.resolve(__dirname, "./views/login.html");

    res.sendFile(path_login);
});

app.get("/product", (req, res) => {
    let path_product = path.resolve(__dirname, "./views/product.html");

    res.sendFile(path_product);
});

app.get("/basket", (req, res) => {
    let path_basket = path.resolve(__dirname, "./views/basket.html");

    res.sendFile(path_basket);
});
