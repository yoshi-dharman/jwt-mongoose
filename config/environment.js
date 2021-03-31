require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_LIVE: process.env.MONGODB_LIVE,
    JWT_KEY: process.env.JWT_KEY
};