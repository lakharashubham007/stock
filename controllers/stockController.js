// controllers/stockController.js
const { getStockData } = require('../models/stockModel');

async function fetchStock(req, res) {
    const symbol = req.params.symbol;

    try {
        const data = await getStockData(symbol);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { fetchStock };
