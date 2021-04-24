import React from 'react'
import Head from 'next/head'

const MainLayout = ({ children, title = '', }) => {
    return (
        <>
            <Head>
                <title>{title} | Nakukop test</title>
            </Head>

            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout