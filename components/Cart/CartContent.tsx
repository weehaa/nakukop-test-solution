import React, {useEffect, useState} from 'react'
import {useStoreon} from '../../store'

import CartTable from './CartTable'

const CartContent: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products' )

    const [isEmpty, setIsEmpty] = useState<boolean>(true)

    const cartCount: number = Object.entries(cart).length

    useEffect(() => {
        (cartCount === 0) ? setIsEmpty(true) : setIsEmpty(false)
    }, [cartCount])

    if (isEmpty) return <p>Ваша корзина пуста</p>

    return <CartTable cart={cart} products={products}/>
}

export default CartContent

