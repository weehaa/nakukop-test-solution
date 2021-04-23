import React from 'react'
import {useStoreon} from '../store'
import ItemLayout from "./Item.Layout";

const Cart: React.FC = () => {
    const {cart, products, exchangeRate} =
        useStoreon('cart', 'products', 'exchangeRate')

    let cartContent
    if (!Object.keys(cart).length) {
        cartContent = <p>Ваша корзина пуста</p>
    } else {
        cartContent = Object.entries(cart).map(([id, {count: cartCount} ]) => {
            const {name, categoryId, priceUSD} = products[id]
            return <ItemLayout key={id} id={id} name={name} priceUSD={priceUSD} categoryId={categoryId} count={cartCount} />
        })
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