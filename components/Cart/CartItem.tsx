import React from 'react'

import {useStoreon} from '../../store'

import {IProduct} from '../../interfaces/products'

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
        <tr>
            <td>{name}</td>
            <td>
                <input
                    type="number"
                    value={cartCount}
                    onChange={({target: {value}}) =>
                        onInputChange(value)}
                />
                <div className={count === cartCount ? 'warn' : 'hide'}>Количество ограничено</div>
            </td>
            <td><b>{price} руб.</b>/шт.</td>
            <td onClick={onDelete}>Удалить</td>
        </tr>
    )
}

export default CartItem
