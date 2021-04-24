import React from 'react'
import {useStoreon} from '../../store'

import CartItem from "./CartItem";

const Cart: React.FC = () => {
    const {cart, products, exchangeRate} =
        useStoreon('cart', 'products', 'exchangeRate')


    let cartContent
    if (!Object.keys(cart).length) {
        cartContent = <p>Ваша корзина пуста</p>
    } else {
        cartContent =
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
                    Object.entries(cart).map(([id, {count: cartCount} ]) => {
                        const price: number = +(products[id].priceUSD * exchangeRate).toFixed(2)
                        return <CartItem key={id} {...products[id]} price={price} cartCount={cartCount}/>
                    })
                }
                </tbody>
            </table>
    }
    const cartPriceUSD = Object.entries(cart).reduce((acc, [id, {count}]) => {
        return acc + (products[id].priceUSD * count)
    }, 0)
    const cartPrice = (cartPriceUSD * exchangeRate).toFixed(2)
    return (
        <>
            <h1>Корзина</h1>
            { cartContent }
            <h4>Общая стоимость: <span>{cartPrice}</span> руб.</h4>
        </>
    )
}

export default Cart