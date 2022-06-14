const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const loginController = require('../controllers/loginController');

const router = express.Router();

router.get("", loginController.print);

module.exports = router;
