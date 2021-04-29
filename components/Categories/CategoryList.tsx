import React from 'react'

import {Spinner} from '@chakra-ui/spinner'

import countObjKeys from '../../helpers/countObjKeys'

import {ICategory} from '../../interfaces/categories'
import {IProducts} from '../../interfaces/products'

import CategoryLayout from './Category.Layout'
import {Accordion} from '@chakra-ui/accordion'

interface ICategoryListProps {
    categories: ICategory[]
    products: IProducts
}

const CategoryList = ({categories, products}: ICategoryListProps) => {
    if (!countObjKeys(products) || !countObjKeys(categories)) {
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        )
    }

    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {
                categories.map(({name, id}) => {
                    const catProducts = Object.values(products)
                        .filter(({categoryId}) => categoryId === id)
                    if (!countObjKeys(catProducts)) return
                    return <CategoryLayout key={id} name={name} products={catProducts} />})
            }
        </Accordion>
    )
}

export default CategoryList