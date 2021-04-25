import React from 'react'

import {useStoreon} from '../../store'

import {IProduct} from '../../interfaces/products'
import {Td, Tr} from '@chakra-ui/table'
import {Input} from '@chakra-ui/input'
import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/number-input";
import {Button} from '@chakra-ui/button'

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
        // if (isNaN(value) || value<1) value = 1
        dispatch('cart/update', {id, count: +value})
    }

    return (
        <tr>
            <td>{name}</td>
            <td>
                <NumberInput defaultValue={cartCount} max={count} min={1} size="md" onChange={onInputChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <div className={count === cartCount ? 'warn' : 'hide'}>Количество ограничено</div>
            </td>
            <td><b>{price} руб.</b>/шт.</td>
            <td ><Button variant="outline" colorScheme="red" onClick={onDelete}>Удалить</Button></td>
        </tr>
    )
}

export default CartItem
