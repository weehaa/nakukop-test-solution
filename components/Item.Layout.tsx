import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'
import classes from '../styles/item.module.css'

const ItemLayout = ({name, priceUSD, count, id}: IProduct) => {

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }
    const {dispatch, exchangeRate, prevExchangeRate} =
        useStoreon('exchangeRate', 'prevExchangeRate')

    const rateChange = prevExchangeRate - exchangeRate
    let clazz;
    if (rateChange > 0) clazz=classes.down
    if (rateChange < 0) clazz=classes.up

    const price = (priceUSD * exchangeRate).toFixed(2)
    return (
        <>
            <div>{name}({count})<span className={clazz}>{price}</span>руб.<span>/шт.</span></div>
            <button onClick={addToCart}>Add to Cart</button>
        </>
    )
}

export default ItemLayout