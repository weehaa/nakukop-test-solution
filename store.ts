import { createContext } from 'react'

import { createStoreon, StoreonModule } from 'storeon'
import { customContext } from 'storeon/react'
import getExchangeRate from "./helpers/getExchangeRate";

// State structure
interface State {
    exchangeRate: number
    prevExchangeRate: number
}

// Events declaration: map of event names to type of event data
interface Events {
    // `update` event which do not goes with any data
    'update': undefined
}

const exchangeRateModule:  StoreonModule<State, Events> = store => {
    store.on('@init', () => ({
            exchangeRate: +process.env.INIT_EXCHANGE_RATE,
            prevExchangeRate: +process.env.INIT_EXCHANGE_RATE,
        })
    )
    store.on('update', ({exchangeRate}) => ({
            prevExchangeRate: exchangeRate,
            exchangeRate: getExchangeRate()
        })
    )
}

export const store = createStoreon<State, Events>([exchangeRateModule])

const CustomContext = createContext(store)

// useStoreon will automatically recognize your storeon store and event types
export const useStoreon = customContext(CustomContext)