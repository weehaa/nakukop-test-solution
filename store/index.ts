import { createContext } from 'react'

import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
import { storeonDevtools } from 'storeon/devtools';

import {exchangeRateModule} from './exchangeRate'
import {goodsModule} from './products'
import {cartModule} from './cart'

export const store = createStoreon(
    [exchangeRateModule, goodsModule, cartModule, process.env.NODE_ENV !== 'production' && storeonDevtools]
)

export const CustomContext = createContext(store)

export const useStoreon = customContext(CustomContext)