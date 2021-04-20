import {store} from '../store'
import {StoreContext} from 'storeon/react'
import React from 'react'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StoreContext.Provider value={store}>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </StoreContext.Provider>
    )
}