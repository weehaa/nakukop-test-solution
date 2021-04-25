import React from 'react'

import {ICategory} from '../../interfaces/categories'
import CategoryLayout from './Category.Layout'
import {IProducts} from '../../interfaces/products'

interface ICategoryListProps {
    categories: ICategory[]
    products: IProducts
}

const CategoryList = ({categories, products}: ICategoryListProps) => {
    return (
        <section>
            {
                categories.map(({name, id}) => {
                    const catProducts = Object.values(products)
                        .filter(({categoryId}) => categoryId === id)
                    if (!catProducts.length) return
                    return <CategoryLayout key={id} name={name} products={catProducts} />})
            }
        </section>
    )
}

export default CategoryList