import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'

const ItemLayout = ({name, priceUSD, count}: IProduct) => {
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