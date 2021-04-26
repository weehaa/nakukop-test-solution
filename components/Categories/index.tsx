import React from 'react'

import Exchange from "../Exchange";
import CategoryList from './CategoryList'
import {useStoreon} from "../../store";
import {Heading} from '@chakra-ui/layout'

const CategoriesLayout = () => {
    const {categories, products} = useStoreon('categories', 'products')
    return (
        <>
            <Heading size="xl">Каталог товаров</Heading>
            <Exchange />
            <CategoryList categories={Object.values(categories)} products={products}/>
        </>
    )
}

export default CategoriesLayout