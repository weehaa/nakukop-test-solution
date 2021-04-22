export interface ICategory {
    id: number
    name: string
    productIds: number[]
}

export interface ICategories {
    [id: number]: ICategory
}