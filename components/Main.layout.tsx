import React from 'react'
import Head from 'next/head'

import { Container } from '@chakra-ui/react'

const MainLayout = ({ children, title = '', }) => {
    return (
        <Container maxW="container.lg">
            <Head>
                <title>{title} | Nakukop test</title>
            </Head>

            <main>
                {children}
            </main>
        </Container>
    )
}

export default MainLayout