const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const path_public = path.resolve("./public");

app.listen(3000, console.log("Port: 3000"));

app.use(express.static(path_public));

app.get("/", (req, res) => {
    let path_index = path.resolve(__dirname, "./views/index.html");

    res.sendFile(path_index);
});

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

app.get("/pay", (req, res) => {
    let path_pay = path.resolve(__dirname, "./views/pay.html");

    res.sendFile(path_pay);
});
