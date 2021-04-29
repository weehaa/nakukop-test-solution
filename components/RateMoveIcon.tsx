import React from 'react'
import {useStoreon} from '../store'

import {Box, Icon} from '@chakra-ui/react'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'

interface IRateMoveIcon {
    size?: number
}


const RateMoveIcon: React.FC<IRateMoveIcon> = ({size=5}) => {
    const {rateMove} = useStoreon('rateMove')
    return (
        <Box d='inline-block' w={size}>
            { rateMove === 'rate-up' &&
                <Icon as={AiFillCaretUp} boxSize={size} color='red.300' d='inline'/> }
            { rateMove === 'rate-down' &&
                <Icon as={AiFillCaretDown} boxSize={size} color='green.300' d='inline'/> }
        </Box>
    )
}

export default RateMoveIcon