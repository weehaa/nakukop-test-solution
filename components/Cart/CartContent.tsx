import React, {useEffect, useState} from 'react'
import {useStoreon} from '../../store'

import CartTable from './CartTable'

const CartContent: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products' )

    const [state, setState] = useState<'loading'|'loaded'>('loading')

    const cartItems = Object.entries(cart)

    useEffect(() => {
        if (Object.keys(products).length) setState('loaded')
    }, [products])

    switch (state) {
        case 'loading':
            return <p>Loading...</p>
        case 'loaded':
            if (!cartItems.length) return <p>Ваша корзина пуста</p>
            return <CartTable cart={cart} products={products}/>
    }
}

export default CartContent

