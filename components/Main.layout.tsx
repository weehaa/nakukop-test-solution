import React from 'react'
import Link from "next/link"
import Head from "next/head";
import ExchangeLayout from "./Exchange.layout";

const MainLayout = ({ children, title = '', }) => {
    return (
        <>
            <Head>
                <title>{title} | Nakukop test</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Каталог</a></Link>
                <Link href={'/cart'}><a>Корзина</a></Link>
            </nav>
            <ExchangeLayout />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout