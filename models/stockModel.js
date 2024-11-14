// models/stockModel.js
const fetch = require('node-fetch');


const allowedSymbolsMapping = {
    "NIFTY": "%5ENSEI",
    "BANKNIFTY": "%5ENSEBANK",
    "CNXFINANCE": "NIFTY_FIN_SERVICE.NS",
    "MIDCPNIFTY1!": "NIFTY_MID_SELECT.NS",
    "M_M": "M&M.NS",
    "M_MFIN": "M&MFIN.NS"
};


async function getStockData(symbol) {

    const staticSymbolResult = allowedSymbolsMapping[symbol] || `${symbol}.NS`;

    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${staticSymbolResult}?region=IN&lang=en-IN&interval=1d`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch data from Yahoo Finance');
    }

    return response.json();
}

module.exports = { getStockData };
