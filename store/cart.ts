import { StoreonModule } from 'storeon'
import {Events, State} from '../interfaces/store'

export const cartModule: StoreonModule<State, Events> = ({on, dispatch}) => {
    on('@init', () => ({cart: {}}))
    on('cart/add', ({cart, products}, id) => {
        const count = Object.keys(cart).includes(id) ? ++cart[id].count : 1
        dispatch('cart/update', {id, count})
    })
    on('cart/delete', ({cart}, id) => {
        const {[id]: removed, ...cartWithoutRemovedProduct} = cart
        return {cart: cartWithoutRemovedProduct}
    })
    on('cart/update', ({cart, products}, {id, count}) => {
        if (count > products[id].count) count = products[id].count
        return {
            cart: {...cart, [id]: {count: count}}
        }
    })
}