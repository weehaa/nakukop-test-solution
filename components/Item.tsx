import React from 'react'

import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'
import classes from '../styles/item.module.css'
import {Table, Tbody, Td, Tr} from '@chakra-ui/table'
import {Button} from '@chakra-ui/button'


const Item = ({name, price, count, id}: IProduct) => {
    const {dispatch, rateMove} =
        useStoreon('rateMove')

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    return (

                <Tr>
                    <Td>{name} ({count})</Td>
                    <Td className={classes[rateMove]}> {price} руб./шт. </Td>
                    <Td><Button onClick={addToCart}>Add to Cart</Button></Td>
                </Tr>

    )
}

export default Item