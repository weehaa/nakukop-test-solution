import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'

const ItemLayout = ({name, priceUSD, count, id}: IProduct) => {

    const addToCart = (): void => {
        console.log('add to cart', id, name )
    }
    const {exchangeRate, prevExchangeRate} =
        useStoreon('exchangeRate', 'prevExchangeRate')
    const price: number = +(priceUSD * exchangeRate).toFixed(2)
    return (
        <>
            <div>{name}({count})<span>{price} RUR</span></div>
            <button onClick={addToCart}>Add to Cart</button>
        </>
    )
}

export default ItemLayout