import React from 'react'
import CartContent from './CartContent'
import {Heading} from '@chakra-ui/layout'



const CartLayout = () => {
    return (
        <>
            <Heading size="lg" m={2}>Корзина</Heading>
            <CartContent />
        </>
    )
}

export default CartLayout