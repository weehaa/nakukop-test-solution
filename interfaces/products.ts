export interface IProduct {
    id: string
    name: string
    priceUSD: number
    categoryId: string
    count: number
}

export interface IProducts {
    [id: string]: IProduct
}