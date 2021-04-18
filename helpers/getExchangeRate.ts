const getExchangeRate = (): number => {
    const max = 80
    const min = 50
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getExchangeRate