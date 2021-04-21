import { createContext } from 'react'

import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'

import {exchangeRateModule} from './exchangeRate'
import {goodsModule} from './products'

export const store = createStoreon([exchangeRateModule, goodsModule])

export const CustomContext = createContext(store)

export const useStoreon = customContext(CustomContext)