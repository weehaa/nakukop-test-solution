import React from 'react'
import {useStoreon} from '../../store'

import CartItem from './CartItem'
import {Table, Tbody, Td, Tfoot, Th, Thead, Tr} from '@chakra-ui/table'

const CartTable: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products')

    const cartItems = Object.entries(cart)
    const cartPrice = cartItems.reduce((acc, [id, {count}]) =>
        (acc + (products[id].price * count)), 0).toFixed(2)
    const cartItemsList = cartItems.map(([id, {count: cartCount} ]) =>
        <CartItem key={id} {...products[id]} cartCount={cartCount}/>)

    return (
        <Table mb={7} variant="striped" colorScheme="gray" size="sm">
            <Thead>
                <Tr>
                    <Th>Наименование</Th>
                    <Th>Количество</Th>
                    <Th>Цена</Th>
                    <Th>&nbsp;</Th>
                </Tr>
            </Thead>
            <Tbody>
                {cartItemsList}
            </Tbody>
            <Tfoot>
                <Tr>
                    <Td colSpan={4} isNumeric><b>{`Общая стоимость: ${cartPrice} руб.`}</b></Td>
                </Tr>
            </Tfoot>
        </Table>
    )
}

export default CartTable