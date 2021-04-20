import Link from "next/link"
import Head from "next/head";
import ExchangeLayout from "./Exchange.layout";
import React from "react";

const MainLayout = ({ children, title = '', }) => {
    return (
        <>
            <Head>
                <title>{title} | Nakukop test</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="NAKUKOP test solution" />
                <meta name="keywords" content="books, food, car parts, food, souvenirs" />
                <meta name="author" content="Alexei Veselov" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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