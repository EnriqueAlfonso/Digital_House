const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const subscribeController = require('../controllers/subscribeController');

const router = express.Router();

router.get("", subscribeController.print);

module.exports = router;
