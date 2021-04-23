export interface ICategory {
    id: string
    name: string
    productIds: string[]
}

export interface ICategories {
    [id: string]: ICategory
}