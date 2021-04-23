import { StoreonModule } from 'storeon'
import {Events, State} from '../interfaces/store'

export const cartModule: StoreonModule<State, Events> = store => {
    store.on('@init', () => ({cart: {}, cartSum: 0}))
    store.on('cart/add', ({cart, products}, id) => {
        let count = 1
        if (Object.keys(cart).includes(id)) count = ++cart[id].count
        return {
            cart: {...cart, [id]: {count: count}}
        }
    })
}