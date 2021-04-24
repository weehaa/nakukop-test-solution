import React from 'react'

import Item from '../Item'

import {IProduct} from '../../interfaces/products'

interface ICategoryLayoutProps  {
    name: string
    products: IProduct[]
}

const CategoryLayout = ({name, products}: ICategoryLayoutProps) => {
    const productList = products.map(item => {
        return <Item key={item.id} {...item} />
    })

    return <><h3>{name}</h3>{productList}</>
}

export default CategoryLayout

