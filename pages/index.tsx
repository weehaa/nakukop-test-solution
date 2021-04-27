import React, {useEffect} from 'react'

import {useStoreon} from '../store'

import MainLayout from '../components/Main.layout'
import CartLayout from '../components/Cart'
import CategoriesLayout from '../components/Categories'

import getNamesAndGoods from '../helpers/getNamesAndGoods'

import {GetServerSideProps} from 'next'
import timeout from '../helpers/timeout'


const Index = ({goods, names}) => {
    const {dispatch} = useStoreon()

    useEffect(() => {
        const interval = +process.env.DATA_REFRESH_INTERVAL * 1000
        const timer = setInterval(() => dispatch('goods/get'), interval)
        return () => clearInterval(timer)
    }, [])

    if (names && goods) dispatch('products/save', {goods, names})

    return (
        <MainLayout title='Каталог товаров'>
            <CategoriesLayout />
            <CartLayout />
        </MainLayout>
    )
}

export default Index

export const  getServerSideProps: GetServerSideProps = async () => {
    try {
        const result = await timeout(getNamesAndGoods())
        return { props: result }
    } catch (err) {
        console.log(err)
        return { props: {} }
    }
}
