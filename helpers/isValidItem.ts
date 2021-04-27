import {Good} from '../interfaces/store'

// checks details are present, and price and count are numbers > 0
const isValidItem = (itemDetails: Good): boolean => {
    return itemDetails !== undefined && isNumGtZero(itemDetails["P"]) && isNumGtZero(itemDetails["C"])
}

export const isNumGtZero = (value:number|string): boolean => {
    return !isNaN(Number(value)) && +value>0
}

export default isValidItem