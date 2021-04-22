import React from 'react'

import {ICategory} from '../interfaces/categories'
import CategoryLayout from './Category.Layout'
import {useStoreon} from "../store";

interface ICategoryListProps {
    categories: ICategory[]
}

const CategoryList = ({categories}: ICategoryListProps) => {
    const {products} = useStoreon('products')
    const categoryList = categories.map(({name, id}) => {
        const catProducts = Object.values(products).filter(({categoryId}) => categoryId === id)
        if (!catProducts.length) return
        return <CategoryLayout key={id} name={name} products={catProducts} />
    })
    return (
        <section>
            {categoryList}
        </section>
    )

}

export default CategoryList