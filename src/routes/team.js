const express = require('express');
const app = express();
const router = express.Router();
const teamController = require('../controllers/teamController');

router.get("", teamController.print);

module.exports = router;
