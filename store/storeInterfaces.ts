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

export interface Category {}

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
    // Goods state
    goods: Good[]
    // Names State
    names: Catalog
    // products

    categories: {
        [id: number]: {
            id: number
            name: string
        }
    }

    items: {
        [id: number]: {
            id: number
            name: string
            price: number
            groupId: number
            count: number
        }
    }
}

export interface Events {
    'products/update': { goods: Good[], names: Catalog }

    'exchangeRate/update': undefined

    'goods/update': Array<Good>
    'goods/get': undefined

    'names/update': Catalog
    'names/get': undefined
}