import React, {useEffect} from 'react'

import {useStoreon} from '../store'

import MainLayout from '../components/Main.layout'
import CartLayout from '../components/Cart'
import CategoriesLayout from '../components/Categories'

import getNamesAndGoods from '../helpers/getNamesAndGoods'


const Index = ({goods, names}) => {
    const {dispatch} = useStoreon()

    useEffect(() => {
        let timer
        const internal = +process.env.DATA_REFRESH_INTERVAL * 1000
        setTimeout(() => {
            timer = setInterval(() => dispatch('goods/get'), internal)
        }, internal)
        return () => clearInterval(timer)
    }, [])


    dispatch('products/save', { goods, names })
    return (
        <MainLayout title='Каталог товаров'>
            <CategoriesLayout />
            <CartLayout />
        </MainLayout>
    )
}

export default Index

export async function getServerSideProps() {
    const { names, goods } = await getNamesAndGoods()
    return { props: { names, goods } }
}
