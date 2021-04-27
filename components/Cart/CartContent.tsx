import React, {useEffect, useState} from 'react'
import {useStoreon} from '../../store'

import CartTable from './CartTable'

import {Spinner} from '@chakra-ui/spinner'

const CartContent: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products' )

    const [isEmpty, setIsEmpty] = useState<boolean>(true)

    const cartCount: number = Object.entries(cart).length

    useEffect(() => {
        (cartCount === 0) ? setIsEmpty(true) : setIsEmpty(false)
    }, [cartCount])

    if (isEmpty) return <p>Ваша корзина пуста</p>

    if (!Object.keys(products).length) {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="red.500"
                size="lg"
            />
        )
    }

    return <CartTable cart={cart} products={products}/>
}

export default CartContent

