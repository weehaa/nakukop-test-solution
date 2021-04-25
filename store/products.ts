import { StoreonModule } from 'storeon'

import { Good, State, Events } from '../interfaces/store'
import {IProduct} from '../interfaces/products'
import {ICategories} from '../interfaces/categories'

import getNamesAndGoods from "../helpers/getNamesAndGoods";

export const goodsModule:  StoreonModule<State, Events> = ({on, dispatch}) => {
    on('@init', () => {
        return {categories: {}, products: {}}
    })
    on('goods/get', async () => {
        try {
            const { names, goods } = await getNamesAndGoods()
            dispatch('products/save', { goods, names})
        } catch (e) {
            console.log(e)
            // dispatch('errors/server-error')
        }
    })

    /**
    *   Saves data to store with new Shapes:
    *
    *   categories: {id: {name, id}}
    *   products: {id: (name, priceUSD, price, categoryId, id}
    */
    on('products/save', ({exchangeRate} , {goods, names}) => {
        return Object.entries(names)
            .reduce((acc, [catId, catItem]) => {
                const category: ICategories = {
                    [catId]: {
                        name: catItem["G"],
                        id: catId}
                }
                const catProducts = Object.entries(catItem["B"])
                    .reduce((catProductsAcc, [productId, productItem]) => {
                        const itemDetails: Good = goods.filter(({T}) => T === +productId)[0]
                        if (itemDetails === undefined) return {...catProductsAcc}
                        const product: IProduct = {
                            name: productItem["N"],
                            priceUSD: +itemDetails["C"],
                            price: +(itemDetails["C"]*exchangeRate).toFixed(2),
                            categoryId: itemDetails["G"].toString(),
                            count: +itemDetails["P"],
                            id: productId,
                        }
                        return {...catProductsAcc, [productId]: product}
                    }, {})
                return {...acc,
                    categories: {...acc.categories, ...category},
                    products: {...acc.products, ...catProducts}
                }
            }, {categories: {}, products: {}})
    })
    on('products/updatePrice', ({exchangeRate, products}) => {
        const updatedProducts = Object.entries(products).reduce((acc, [id,product]) => {
            return {...acc, [id]: {...product, price: (product.priceUSD * exchangeRate).toFixed(2)}}
        }, {})
        return {products: {...updatedProducts}}
    })
}