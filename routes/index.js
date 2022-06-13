const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get("", indexController.print);

module.exports = router;
