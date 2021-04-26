import React from 'react'
import {useStoreon} from '../../store'

import CartItem from './CartItem'
import {Table} from "@chakra-ui/table";
import {Heading} from "@chakra-ui/layout";

const CartTable: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products')

    const cartItems = Object.entries(cart)
    const cartPrice = cartItems.reduce((acc, [id, {count}]) =>
        (acc + (products[id].price * count)), 0).toFixed(2)
    const cartItemsList = cartItems.map(([id, {count: cartCount} ]) =>
        <CartItem key={id} {...products[id]} cartCount={cartCount}/>)

    return (
        <table>
            <thead>
            <tr>
                <th>Наименование</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
                {cartItemsList}
            </tbody>

            <tfoot>
            <tr>
                <td colSpan={4}>
                    <Heading size="sm">{`Общая стоимость: ${cartPrice} руб.`}</Heading>
                </td>
            </tr>
            </tfoot>
        </table>
    )
}

export default CartTable