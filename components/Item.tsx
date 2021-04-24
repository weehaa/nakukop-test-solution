import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'
import classes from '../styles/item.module.css'

const Item = ({name, priceUSD, count, id}: IProduct) => {
    const {dispatch, exchangeRate, rateMove} =
        useStoreon('exchangeRate', 'rateMove')

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    const price = (priceUSD * exchangeRate).toFixed(2)
    return (
        <>
            <div>
                {name} ({count})
                <span className={classes[rateMove]}> {price}</span>руб.
                <span>/шт. </span>
                <button onClick={addToCart}>Add to Cart</button>
            </div>

        </>
    )
}

export default Item