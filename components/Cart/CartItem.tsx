import React from 'react'

import {useStoreon} from '../../store'

import {IProduct} from '../../interfaces/products'

import {Button} from '@chakra-ui/button'
import {Td, Tr} from '@chakra-ui/table'

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
                <input
                    type="number"
                    value={cartCount}
                    onChange={({target: {value}}) =>
                        onInputChange(value)}
                />
                <div className={count === cartCount ? 'warn' : 'hide'}>Количество ограничено</div>
            </Td>
            <Td className='price-cell' isNumeric><b>{price} руб.</b>/шт.</Td>
            <Td ><Button variant="outline" colorScheme="red" onClick={onDelete}>Удалить</Button></Td>
        </Tr>
    )
}

export default CartItem
