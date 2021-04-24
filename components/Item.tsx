import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'
import classes from '../styles/item.module.css'

const Item = ({name, priceUSD, count, id}: IProduct) => {
    const {dispatch, exchangeRate, prevExchangeRate} =
        useStoreon('exchangeRate', 'prevExchangeRate')

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    const rateChange = prevExchangeRate - exchangeRate
    let clazz;
    if (rateChange > 0) clazz=classes.down
    if (rateChange < 0) clazz=classes.up

    const price = (priceUSD * exchangeRate).toFixed(2)
    return (
        <>
            <div>
                {name} ({count})
                <span className={clazz}> {price}</span>руб.
                <span>/шт. </span>
                <button onClick={addToCart}>Add to Cart</button>
            </div>

        </>
    )
}

export default Item