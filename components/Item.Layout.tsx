import React from 'react'
import {useStoreon} from '../store'

interface ItemLayoutProps {
    id: number
    name: string
    priceUSD: number
    count: number
}

const ItemLayout = ({name, priceUSD, count}: ItemLayoutProps) => {
    const {exchangeRate, prevExchangeRate} =
        useStoreon('exchangeRate', 'prevExchangeRate')
    const price: number = +(priceUSD * exchangeRate).toFixed(2)
    return (
        <>
            <div>{name}({count})<span>{price} RUR</span></div>
        </>
    )
}

export default ItemLayout