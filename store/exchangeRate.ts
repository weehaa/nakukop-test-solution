import { StoreonModule } from 'storeon'
import { State, Events } from "../interfaces/store";
import getExchangeRate from "../helpers/getExchangeRate";

export const exchangeRateModule:  StoreonModule<State, Events> = ({on, dispatch}) => {
    on('@init', () => (
            {
                rateMove: '',
                exchangeRate: +process.env.INIT_EXCHANGE_RATE,
            }
        )
    )

    on('exchangeRate/update', ({exchangeRate}) => {
        const newRate = getExchangeRate()
        const rateDiff = newRate - exchangeRate
        let rateMove = ''
        if (rateDiff > 0) rateMove = 'rate-up'
        if (rateDiff < 0) rateMove = 'rate-down'
        return {
            rateMove,
            exchangeRate: newRate
        }
    })
}