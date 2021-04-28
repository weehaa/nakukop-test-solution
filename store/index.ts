import { createContext } from 'react'

import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
import { persistState } from '@storeon/localstorage'
import { storeonDevtools } from 'storeon/devtools';

import {exchangeRateModule} from './exchangeRate'
import {goodsModule} from './products'
import {cartModule} from './cart'
import errorModule from './error'

export const store = createStoreon(
    [
        goodsModule,
        exchangeRateModule,
        cartModule,
        errorModule,
        persistState(['cart']),
        process.env.NODE_ENV !== 'production' && storeonDevtools
    ]
)

export const CustomContext = createContext(store)

export const useStoreon = customContext(CustomContext)