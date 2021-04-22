import {ICategories} from './categories'
import {IProducts} from './products'
import {ICartItem} from './cart'

export interface State {
    // Exchange Rate State
    exchangeRate: number
    prevExchangeRate: number
    // products State
    categories: ICategories
    products: IProducts
    // cart State
    cart: ICartItem
    cartSum: number
}

export interface Events {
    'products/update': { goods: Good[], names: Catalog }
    'exchangeRate/update': undefined
    'goods/get': undefined
    'cart/add': number  // productId
}

export interface Item {
    N: string   //name
    T: any
}

export interface Items {
    [productId: number]: Item
}

export interface Group {
    G: string //name
    C: any
    B: Items
}

export interface Catalog {
    [categoryId: number]: Group
}

export interface Good {
    B: boolean
    C: number  // price
    G: number  // group id
    P: number  // quantity
    T: number   // product id
}

