// config/cors.js
const corsOptions = {
    origin: ['http://localhost:3000/', 'https://stock.idea2reality.tech/'], // React app URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = corsOptions;
