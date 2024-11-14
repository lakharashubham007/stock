// routes/stockRoutes.js
const express = require('express');
const router = express.Router();
const { fetchStock } = require('../controllers/stockController');

router.get('/marketprice-stock/:symbol', fetchStock);

module.exports = router;
