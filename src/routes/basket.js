const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const basketController = require('../controllers/basketController');

const router = express.Router();

router.get("", basketController.print);

module.exports = router;
