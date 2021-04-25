import React, {useEffect} from 'react'

import {useStoreon} from '../store'

import MainLayout from '../components/Main.layout'
import CartLayout from '../components/Cart'
import CategoriesLayout from '../components/Categories'

const Index: React.FC = () => {
    const {dispatch, categories, products} = useStoreon('categories', 'products')

    useEffect(() => {
        let refreshTimer = setTimeout(() => dispatch('goods/get'),
            +process.env.DATA_REFRESH_INTERVAL * 1000)
        return () => clearTimeout(refreshTimer)
    }, [categories, products])

    return (
        <MainLayout title='Каталог товаров'>
            <CategoriesLayout categories={categories} products={products} />
            <CartLayout />
        </MainLayout>
    )
}

export default Index