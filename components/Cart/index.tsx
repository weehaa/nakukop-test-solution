import React from 'react'
import CartContent from './CartContent'
import { Container } from '@chakra-ui/react'
import {Heading} from '@chakra-ui/layout'



const CartLayout = () => {
    return (
        <Container maxW="container.md" >
            <Heading size="lg" m={5}>Корзина</Heading>
            <CartContent />
        </Container>
    )
}

export default CartLayout