import React from 'react'
import Link from "next/link"
import Head from "next/head";
import Exchange from "./Exchange";

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
            <Exchange />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout