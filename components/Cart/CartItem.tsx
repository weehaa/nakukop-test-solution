import React from 'react'

import {useStoreon} from '../../store'

import {IProduct} from '../../interfaces/products'

import {Button} from '@chakra-ui/button'
import {Td, Tr} from '@chakra-ui/table'
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/number-input'
import { DeleteIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'


interface ICartItemProps extends IProduct{
    price: number
    cartCount: number
}

const CartItem = ({id, name, count, price, cartCount}: ICartItemProps) => {
    const {dispatch} = useStoreon()

    const onDelete = (): void => {
        dispatch('cart/delete', id)
    }

    const onInputChange = (value): void => {
        if (isNaN(value) || value<1) value = 1
        dispatch('cart/update', {id, count: +value})
    }

    return (
        <Tr>
            <Td>{name}</Td>
            <Td>
                <NumberInput
                    onChange={onInputChange}
                    value={cartCount}
                    max={count}
                    w={100}
                    bgColor="white"
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <div className={count === cartCount ? 'warn' : 'hide'}>Количество ограничено</div>
            </Td>
            <Td isNumeric w={100}>
                <Text><b>{price}</b></Text>
                <Text>руб./шт.</Text>
            </Td>
            <Td>
                <Button bgColor="transparent" onClick={onDelete}>
                    <DeleteIcon w={5} h={5} color="red.300"/>
                </Button>
            </Td>
        </Tr>
    )
}

export default CartItem
