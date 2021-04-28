import {StoreonModule} from 'storeon'
import {Events, State} from '../interfaces/store'

export const errorModule:  StoreonModule<State, Events> = ({on}) => {
    on('@init', () => {
        return {}
    })
    on ('error/server-error', (State, message) => {
        console.error('Server Error', message)
        return {
            error: {
                title: 'Server Error',
                message
            }
        }
    })
}

export default errorModule