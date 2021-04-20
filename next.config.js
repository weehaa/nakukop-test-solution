require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        MAX_EXCHANGE_RATE: process.env.MAX_EXCHANGE_RATE,
        MIN_EXCHANGE_RATE: process.env.MIN_EXCHANGE_RATE,
        INIT_EXCHANGE_RATE: process.env.INIT_EXCHANGE_RATE,
        RATE_REFRESH_INTERVAL: process.env.RATE_REFRESH_INTERVAL
    }
}