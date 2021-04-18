import React, {useEffect, useState} from 'react'
import getExchangeRate from '../helpers/getExchangeRate'

const ExchangeLayout: React.FC = () => {
    const [currentRate, setCurrentRate] = useState<number>(0)
    useEffect(() => {
        if (!currentRate) setCurrentRate(getExchangeRate())
        let exchangeTimer = setTimeout(() => setCurrentRate(getExchangeRate()),
            +process.env.RATE_REFRESH_INTERVAL * 1000)
        return () => clearTimeout(exchangeTimer)
    }, [currentRate])
    return <p>Текущий курс: {currentRate}</p>
}

export default ExchangeLayout