import React, {useEffect, useState} from 'react'
import {useStoreon} from '../../store'

import CartTable from './CartTable'

const CartContent: React.FC = () => {
    const {cart} = useStoreon('cart')

    // to prevent Warning Expected server HTML to contain...
    const [cartContent, setCartContent] = useState(<p>Ваша корзина пуста</p>)

    const cartItems = Object.entries(cart)

    useEffect(() => {
        if (cartItems.length) setCartContent(<CartTable />)
    }, [])

    return cartContent
}

export default CartContent

