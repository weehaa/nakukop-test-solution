import {useStoreon} from '../store'
import {IProduct} from '../interfaces/products'
import classes from '../styles/item.module.css'

const Item = ({name, price, count, id}: IProduct) => {
    const {dispatch, rateMove} =
        useStoreon('rateMove')

    const addToCart = (): void => {
        dispatch('cart/add', id)
    }

    return (
        <div>
            {name} ({count})
            <span className={classes[rateMove]}> {price}</span>руб.
            <span>/шт. </span>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Item