import React from 'react'

import ItemLayout from "./Item.Layout";
import {IProduct} from "../interfaces/products";

interface ICategoryLayoutProps  {
    name: string
    products: IProduct[]
}

const CategoryLayout = ({name, products}: ICategoryLayoutProps) => {
    const productList = products.map(item => {
        return <ItemLayout key={item.id} {...item} />
    })

    return (
        <>
            <h3>{name}</h3>
            {productList}
        </>
    )
}

export default CategoryLayout

