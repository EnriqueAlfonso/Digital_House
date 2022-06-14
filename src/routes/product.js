const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const productController = require('../controllers/productController');

const router = express.Router();

router.get("", productController.print);

module.exports = router;
