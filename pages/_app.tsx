import type { AppProps } from 'next/app'

import {store} from '../store'
import {CustomContext} from '../store'

import ErrorBoundary from '../components/ErrorBoundary'

// window.store = store
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CustomContext.Provider value={store}>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </CustomContext.Provider>
    )
}