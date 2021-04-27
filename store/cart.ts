import { StoreonModule } from 'storeon'
import {Events, State} from '../interfaces/store'

export const cartModule: StoreonModule<State, Events> = ({on, dispatch}) => {
    on('@init', () => ({cart: {}}))
    on('cart/add', ({cart, products}, id) => {
        const count = Object.keys(cart).includes(id) ? ++cart[id].count : 1
        dispatch('cart/update', {id, count})
    })
    // delete item from cart by id
    on('cart/delete', ({cart}, id) => {
        const {[id]: removed, ...cartWithoutRemovedProduct} = cart
        return {cart: cartWithoutRemovedProduct}
    })
    // update item in the cart by id with new count
    on('cart/update', ({cart, products}, {id, count}) => {
        if (count > products[id].count) count = products[id].count
        return {
            cart: {...cart, [id]: {count: count}}
        }
    })
    // actualize products in cart (runs after new  products loaded)
    on('cart/refresh', ({cart}, products) => {
        Object.entries(cart).forEach(([id, {count}]) => {
            const product = products[id]
            if (product === undefined || product.count < 1) { dispatch('cart/delete', id) }
            if (count > product.count) { dispatch('cart/update', {id, count: product.count}) }
        })
    })
}