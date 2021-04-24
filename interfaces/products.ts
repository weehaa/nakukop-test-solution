export interface IProduct {
    id: string
    name: string
    priceUSD: number
    price: number
    categoryId: string
    count: number
}

export interface IProducts {
    [id: string]: IProduct
}