import {ICategories} from "../interfaces/categories";
import {IProducts} from "../interfaces/products";

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

export interface State {
    // Exchange Rate State
    exchangeRate: number
    prevExchangeRate: number
    // products State
    categories: ICategories
    products: IProducts
}

export interface Events {
    'products/update': { goods: Good[], names: Catalog }
    'exchangeRate/update': undefined
    'goods/get': undefined
}