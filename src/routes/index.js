const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const routes_subscribe = require("./subscribe");
const routes_login = require("./login");
const routes_product = require("./product");
const routes_basket = require("./basket");

const indexController = require("../controllers/indexController");
/*
const productController = require("../controllers/productController");
const subscribeController = require("../controllers/subscribeController");
const loginController = require("../controllers/loginController");
const basketController = require("../controllers/basketController");
const teamController = require("../controllers/teamController");
*/
const router = express.Router();

router.get("", indexController.print);

router.use("/product", routes_product);
router.use("/subscribe", routes_subscribe);
router.use("/login", routes_login);
router.use("/basket", routes_basket);

module.exports = router;
