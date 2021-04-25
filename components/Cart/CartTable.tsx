import React from 'react'
import {useStoreon} from '../../store'

import CartItem from './CartItem'

const CartTable: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products')
    const cartItems = Object.entries(cart)

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
            {
                // Cart items list
                cartItems.map(([id, {count: cartCount} ]) =>
                    <CartItem key={id} {...products[id]} cartCount={cartCount}/>)
            }
            </tbody>

            <tfoot>
            <tr>
                <td colSpan={4}>
                    <h4>Общая стоимость:
                        <span>
                                {
                                    // Cart price
                                    cartItems.reduce((acc, [id, {count}]) =>
                                        (acc + (products[id].price * count)), 0).toFixed(2)
                                }
                        </span>
                        руб.
                    </h4>
                </td>
            </tr>
            </tfoot>
        </table>
    )
}

export default CartTable