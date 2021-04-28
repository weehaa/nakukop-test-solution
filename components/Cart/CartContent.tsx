import React, {useEffect, useState} from 'react'
import {useStoreon} from '../../store'

import CartTable from './CartTable'

import {Spinner} from '@chakra-ui/spinner'
import countObjKeys from '../../helpers/countObjKeys'

const CartContent: React.FC = () => {
    const {cart, products} = useStoreon('cart', 'products' )

    const [isEmpty, setIsEmpty] = useState<boolean>(true)

    const cartCount: number = countObjKeys(cart)

    useEffect(() => {
        (cartCount === 0) ? setIsEmpty(true) : setIsEmpty(false)
    }, [cartCount])

    if (isEmpty) return <p>Ваша корзина пуста</p>

    if (!countObjKeys(products)) {
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

