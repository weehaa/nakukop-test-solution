export interface IProduct {
    id: number
    name: string
    priceUSD: number
    categoryId: number
    count: number
}

export interface IProducts {
    [id: number]: IProduct
}