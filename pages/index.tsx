import React, {ReactNode, useEffect} from 'react'

import {useStoreon} from '../store'

import MainLayout from '../components/Main.layout'
import CategoryLayout from '../components/Category.Layout'

const Index: React.FC = () => {
    const {dispatch, names} = useStoreon('names')
    useEffect(() => {
        let refreshTimer = setTimeout(() => dispatch('goods/get'),
            +process.env.DATA_REFRESH_INTERVAL * 1000)
        return () => clearTimeout(refreshTimer)
    }, [names])

    const products: ReactNode = Object.entries(names).map(([catId, cat]) => {
        //  prepare category items
        const catItems = Object.entries(cat["B"])
        return <CategoryLayout key={catId} categoryName={cat["G"]} catItems={catItems} />
    })

    return (
        <MainLayout title='Каталог товаров'>
            <h1>Каталог товаров</h1>
            { products }
        </MainLayout>
    )
}

export default Index


// names example

// {"1": {                                  // category id
//         "G": "Книги",                    // category name
//         "B": {                           // category items
//             "1": {                       // item id
//                 "N": "Алгоритмы. ...",   // item name
//                 "T": 1
//             },
//         }
//     }
// }