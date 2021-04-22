import {useStoreon} from '../store'

import {Good, Items} from '../store/storeInterfaces'
import ItemLayout from "./Item.Layout";
import React from "react";

interface CategoryLayoutProps {
    categoryName: string
    catItems: any
}
const CategoryLayout = ({categoryName, catItems}: CategoryLayoutProps) => {
    const {goods} = useStoreon('goods')
    const items = catItems.map(([itemId, item]) => {
        const itemDetails: Good[] = goods.filter(({T}) => T === +itemId)
        // don't show item if no details
        if (!itemDetails.length) return null
        const {C: priceUSD, P: count } = itemDetails[0]
        return <ItemLayout key={itemId} id={itemId} name={item["N"]} priceUSD={priceUSD} count={count}/>
    })

    if (!items.join('')) return null
    return (
        <>
            <h3>{categoryName}</h3>
            {items}
        </>
    )
}

export default CategoryLayout

