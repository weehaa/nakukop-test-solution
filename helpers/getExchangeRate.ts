const getExchangeRate = (): number => {
    const max = +process.env.MAX_EXCHANGE_RATE
    const min = +process.env.MIN_EXCHANGE_RATE
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getExchangeRate