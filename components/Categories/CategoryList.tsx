import React from 'react'

import {ICategory} from '../../interfaces/categories'
import CategoryLayout from './Category.Layout'
import {IProducts} from '../../interfaces/products'
import {Table, Tbody} from '@chakra-ui/table'

interface ICategoryListProps {
    categories: ICategory[]
    products: IProducts
}

const CategoryList = ({categories, products}: ICategoryListProps) => {
    return (
        <Table>
            <Tbody>
            {
                categories.map(({name, id}) => {
                    const catProducts = Object.values(products)
                        .filter(({categoryId}) => categoryId === id)
                    if (!catProducts.length) return
                    return <CategoryLayout key={id} name={name} products={catProducts} />})
            }
            </Tbody>
        </Table>
    )
}

export default CategoryList