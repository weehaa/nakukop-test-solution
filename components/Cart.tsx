import React from 'react'
import {useStoreon} from '../store'

const Cart: React.FC = () => {
    const {dispatch, cart} = useStoreon('cart')
    return (
        <>
            <h1>Корзина</h1>
            <p>Ваша корзина пуста</p>
        </>
    )
}

export default Cart