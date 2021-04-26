import React from 'react'

import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'

import {Td, Tr} from '@chakra-ui/table'
import {Button} from '@chakra-ui/button'

import classes from '../styles/item.module.css'


const Item = ({name, price, count, id}: IProduct) => {
    const {dispatch, rateMove} =
        useStoreon('rateMove')

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    return (
        <Tr>
            <Td>{name} ({count})</Td>
            <Td isNumeric className={`${classes[rateMove]} price-cell`}> {price} руб./шт. </Td>
            <Td><Button onClick={addToCart}>В корзину</Button></Td>
        </Tr>
    )
}

export default Item