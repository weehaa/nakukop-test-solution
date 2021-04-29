import React, {useEffect, useState} from 'react'

import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'

import {Td, Tr} from '@chakra-ui/table'
import {Button} from '@chakra-ui/button'
import { Icon, Text } from "@chakra-ui/react"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import RateMoveIcon from './RateMoveIcon'


const Item = ({name, price, count, id}: IProduct) => {
    const {dispatch, cart} = useStoreon('cart')
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(() => {
        const cartCount = (typeof cart[id] !== 'undefined') ? cart[id].count : 0
        setCartCount(cartCount)
    },[ cart[id]])

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    return (
        <Tr>
            <Td p={2}>{name} ({count})</Td>
            <Td pr={0} pl={5} w={7}>
                <RateMoveIcon />
            </Td>
            <Td p={2} w={120} isNumeric>
                <Text>
                    {price} руб.
                </Text>
            </Td>
            <Td p={0} w={110} >
                <Button onClick={addToCart} p={5} w={110}>
                    <Icon boxSize={9} as={AiOutlineShoppingCart} color='orange.400'/>
                    <Text fontSize="sm" pl={2} color={cartCount===count && 'red.300'}>
                        {cartCount ? `(${cartCount})` : null}
                    </Text>
                </Button>
            </Td>
        </Tr>
    )
}

export default Item