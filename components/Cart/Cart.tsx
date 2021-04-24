import React, {useEffect, useState} from 'react'
import {useStoreon} from '../../store'

import CartItem from './CartItem'

const Cart: React.FC = () => {

    const {cart, products, exchangeRate} =
        useStoreon('cart', 'products', 'exchangeRate')
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        if (Object.keys(products).length > 0 ) setLoaded(true)
    }, [products])

    const cartItems = Object.entries(cart)

    if (!cartItems.length) return <p>Ваша корзина пуста</p>

    if (!isLoaded) return <p>Loading...</p>

    const cartPrice = (cartItems.reduce((acc, [id, {count}]) => {
        return acc + (products[id].priceUSD * count)
    }, 0) * exchangeRate).toFixed(2)

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
                cartItems.map(([id, {count: cartCount} ]) => {
                    const price: number = +(products[id].priceUSD * exchangeRate).toFixed(2)
                    return <CartItem key={id} {...products[id]} price={price} cartCount={cartCount}/>
                })
            }
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={4}>
                        <h4>Общая стоимость: <span>{cartPrice}</span> руб.</h4>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Cart