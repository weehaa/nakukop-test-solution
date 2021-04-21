import React, {useEffect} from 'react'
import { useStoreon } from '../store'

const ExchangeLayout: React.FC = () => {
    const { dispatch, exchangeRate } = useStoreon('exchangeRate')
    useEffect(() => {
        let exchangeTimer = setTimeout(() => dispatch('exchangeRate/update'),
            +process.env.RATE_REFRESH_INTERVAL * 1000)
        return () => clearTimeout(exchangeTimer)
    }, [exchangeRate])
    return <p>Текущий курс: {exchangeRate}</p>
}

export default ExchangeLayout