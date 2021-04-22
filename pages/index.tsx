import React, {useEffect} from 'react'

import {useStoreon} from '../store'

import MainLayout from '../components/Main.layout'
import CategoryList from '../components/CategoryList'
import Cart from '../components/Cart'

const Index: React.FC = () => {
    const {dispatch, categories} = useStoreon('categories')

    useEffect(() => {
        let refreshTimer = setTimeout(() => dispatch('goods/get'),
            +process.env.DATA_REFRESH_INTERVAL * 1000)
        return () => clearTimeout(refreshTimer)
    }, [categories])

    return (
        <MainLayout title='Каталог товаров'>
            <h1>Каталог товаров</h1>
            <CategoryList categories={Object.values(categories)} />
            <Cart />
        </MainLayout>
    )
}

export default Index