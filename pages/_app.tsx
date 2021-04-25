import React from 'react'
import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"
import '../styles/main.css'

import {store} from '../store'
import {CustomContext} from '../store'

import ErrorBoundary from '../components/ErrorBoundary'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CustomContext.Provider value={store}>
            <ErrorBoundary>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </ErrorBoundary>
        </CustomContext.Provider>
    )
}