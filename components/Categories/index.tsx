import React from 'react'

import Exchange from "../Exchange";
import CategoryList from './CategoryList'
import {useStoreon} from "../../store";

const CategoriesLayout = () => {
    const {categories, products} = useStoreon('categories', 'products')
    return (
        <>
            <h1>Каталог товаров</h1>
            <Exchange />
            <CategoryList categories={Object.values(categories)} products={products}/>
        </>
    )
}

export default CategoriesLayout