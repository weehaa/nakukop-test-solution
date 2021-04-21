import { StoreonModule } from 'storeon'
import { State, Events } from "./storeInterfaces";
import getExchangeRate from "../helpers/getExchangeRate";

export const exchangeRateModule:  StoreonModule<State, Events> = store => {
    store.on('@init', () => ({
            exchangeRate: +process.env.INIT_EXCHANGE_RATE,
            prevExchangeRate: +process.env.INIT_EXCHANGE_RATE,
        })
    )
    store.on('exchangeRate/update', ({exchangeRate}) => ({
            prevExchangeRate: exchangeRate,
            exchangeRate: getExchangeRate()
        })
    )
}