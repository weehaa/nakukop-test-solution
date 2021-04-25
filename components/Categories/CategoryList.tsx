import React, {useEffect, useState} from 'react'

import {ICategory} from '../../interfaces/categories'
import CategoryLayout from './Category.Layout'
import {IProducts} from '../../interfaces/products'

interface ICategoryListProps {
    categories: ICategory[]
    products: IProducts
}

const CategoryList = ({categories, products}: ICategoryListProps) => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        setCategoryList(categories.map(({name, id}) => {
            const catProducts = Object.values(products).filter(({categoryId}) => categoryId === id)
            if (!catProducts.length) return
            return <CategoryLayout key={id} name={name} products={catProducts} />
        }))
    }, [categories])

    return <section>{categoryList}</section>
}

export default CategoryList