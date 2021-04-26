import React from 'react'

import Item from '../Item'

import {IProduct} from '../../interfaces/products'
import {Td, Tr} from '@chakra-ui/table'
import {Heading} from '@chakra-ui/layout'

interface ICategoryLayoutProps  {
    name: string
    products: IProduct[]
}

const CategoryLayout = ({name, products}: ICategoryLayoutProps) => {
    const productList = products.map(item => {
        return <Item key={item.id} {...item} />
    })

    return (
        <>
            <Tr>
                <Td>
                    <Heading size="md">{name}</Heading>
                </Td>
            </Tr>
            {productList}
        </>
    )
}

export default CategoryLayout

