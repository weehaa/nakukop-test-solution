import React, {useEffect} from 'react'
import { useStoreon } from '../store'

import { Text } from '@chakra-ui/layout'

const Exchange: React.FC = () => {
    const { dispatch, exchangeRate } = useStoreon('exchangeRate')
    useEffect(() => {
        let exchangeTimer = setInterval(() => dispatch('exchangeRate/update'),
            +process.env.RATE_REFRESH_INTERVAL * 1000)
        return () => clearInterval(exchangeTimer)
    }, [])
    return <Text>Текущий курс: {exchangeRate} руб./$</Text>
}

export default Exchange