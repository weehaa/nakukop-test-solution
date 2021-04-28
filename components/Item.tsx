import React from 'react'

import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'

import {Td, Tr} from '@chakra-ui/table'
import {Button} from '@chakra-ui/button'
import { Icon, Text } from "@chakra-ui/react"
import { AiOutlineShoppingCart, AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'


const Item = ({name, price, count, id}: IProduct) => {
    const {dispatch, rateMove} =
        useStoreon('rateMove')

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    return (
        <Tr>
            <Td p={2}>{name} ({count})</Td>
            <Td pr={0} pl={5}>
                { rateMove === 'rate-up' &&
                    <Icon as={AiFillCaretUp} boxSize={6} color='red.300' d='inline'/> }
                { rateMove === 'rate-down' &&
                    <Icon as={AiFillCaretDown} boxSize={6} color='green.300' d='inline'/> }
            </Td>
            <Td isNumeric p={2}>
                <Text w={110}>
                    {price} руб.
                </Text>
            </Td>
            <Td p={2}>
                <Button onClick={addToCart} p={5}>
                    <Icon boxSize={9} as={AiOutlineShoppingCart} color='orange.400'/>
                </Button>
            </Td>
        </Tr>
    )
}

export default Item