export interface Item {
    N: string   //name
    T: any
}

export interface Items {
    [productId: number]: Item
}

export interface Category {
    G: string //name
    C: any
    B: Items
}

export interface Catalog {
    [categoryId: number]: Category
}

export interface Good {
    B: boolean
    C: number  // price
    G: number  // group id
    P: number  // quantity
    T: number   // product id
}

export interface State {
    productsStatus: 'loaded' | 'loading' | 'error'
    // Exchange Rate State
    exchangeRate: number
    prevExchangeRate: number
    // Goods state
    goods: Good[]
    // Names State
    names: Catalog
    // products
    products: Array<Good[] | Catalog >
}

export interface Events {
    'productsStatus/update': State['productsStatus']

    'exchangeRate/update': undefined

    'goods/update': Array<Good>
    'goods/get': undefined

    'names/update': Catalog
    'names/get': undefined
}