import React, {useEffect} from 'react'

import {useStoreon} from '../store'

import MainLayout from '../components/Main.layout'
import CategoryList from '../components/CategoryList/CategoryList'
import Cart from '../components/Cart/Cart'
import Exchange from "../components/Exchange";

const Index: React.FC = () => {
    const {dispatch, categories, products} = useStoreon('categories', 'products')

    useEffect(() => {
        let refreshTimer = setTimeout(() => dispatch('goods/get'),
            +process.env.DATA_REFRESH_INTERVAL * 1000)
        return () => clearTimeout(refreshTimer)
    }, [categories, products])

    return (
        <MainLayout title='Каталог товаров'>
            <h1>Каталог товаров</h1>
            <Exchange />
            <CategoryList categories={Object.values(categories)} products={products}/>
            <h2>Корзина</h2>
            <Cart />
        </MainLayout>
    )
}

export default Index