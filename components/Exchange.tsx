import React, {useEffect} from 'react'
import { useStoreon } from '../store'

import { Box } from '@chakra-ui/layout'
import RateMoveIcon from './RateMoveIcon'

const Exchange: React.FC = () => {
    const { dispatch, exchangeRate } = useStoreon('exchangeRate')
    useEffect(() => {
        let exchangeTimer = setInterval(() => dispatch('exchangeRate/update'),
            +process.env.RATE_REFRESH_INTERVAL * 1000)
        return () => clearInterval(exchangeTimer)
    }, [])
    return (
        <Box>
            Текущий курс: <RateMoveIcon /> {exchangeRate} руб./$
        </Box>
    )
}

export default Exchange