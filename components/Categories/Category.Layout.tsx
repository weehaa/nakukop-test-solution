import React from 'react'

import Item from '../Item'

import {IProduct} from '../../interfaces/products'
import {Table, Tbody, Td, Tr} from '@chakra-ui/table'

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
                        <h3>{name}</h3>
                    </Tr>

                    {productList}

        </>
    )
}

export default CategoryLayout

