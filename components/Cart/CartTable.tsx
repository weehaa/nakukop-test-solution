import React from 'react'

import CartItem from './CartItem'

import {IProducts} from '../../interfaces/products'
import {ICartItem} from '../../interfaces/cart'

import {Table, Tbody, Td, Tfoot, Th, Thead, Tr} from '@chakra-ui/table'
import { Text } from '@chakra-ui/react'

interface ICartTableProps {
    cart: ICartItem,
    products: IProducts
}

const CartTable = ({cart, products}: ICartTableProps) => {

    const cartItems = Object.entries(cart)
    const cartPrice = cartItems.reduce((acc, [id, {count}]) =>
        (acc + (products[id].price * count)), 0).toFixed(2)
    const cartItemsList = cartItems.map(([id, {count: cartCount} ]) =>
        <CartItem key={id} {...products[id]} cartCount={cartCount}/>)

    return (
        <Table mb={10} variant="striped" colorScheme="gray" size="sm">
            <Thead>
                <Tr>
                    <Th>Наименование</Th>
                    <Th>Количество</Th>
                    <Th isNumeric>Цена</Th>
                    <Th>&nbsp;</Th>
                </Tr>
            </Thead>
            <Tbody>
                {cartItemsList}
            </Tbody>
            <Tfoot bgColor="yellow.100" >
                <Tr>
                    <Td colSpan={4} py={5} isNumeric>
                        <Text fontSize="lg">Общая стоимость: <b>{cartPrice}</b> руб.</Text>
                    </Td>
                </Tr>
            </Tfoot>
        </Table>
    )
}

export default CartTable