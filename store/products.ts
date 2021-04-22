import { StoreonModule } from 'storeon'
import { Good, Catalog, State, Events } from './storeInterfaces'
import {IProduct, IProducts} from "../interfaces/products";

interface Response {
    Success: string,
    Value?: {
        Goods: Array<Good>
    }
}

const getJSONData = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

export const goodsModule:  StoreonModule<State, Events> = store => {
    store.on('@init', () => {
        store.dispatch('goods/get')
        return {goods: [], names:{}}
    })
    store.on('goods/get', async () => {
        console.log('goods get')
        try {
            // goods request
            const goods: Response = await getJSONData(`${process.env.API_URL}/products.json`)
            // names request
            const names: Catalog = await getJSONData(`${process.env.API_URL}/names.json`)

            // save names and goods into store
            store.dispatch('goods/update', goods.Value.Goods)
            store.dispatch('names/update', names)
            store.dispatch('products/update', { goods: goods.Value.Goods, names: names})
        } catch (e) {
            console.log(e)
            // store.dispatch('errors/server-error')
        }
    })
    store.on('goods/update', ({ goods} , newGoods) => ({goods: newGoods}))
    store.on('names/update', ({ names} , newNames) => ({names: newNames}))

    store.on('products/update', (State , {goods, names}) => {
        const categoriesAndProducts = Object.entries(names)
            .reduce((acc, [catId, catItem]) => {
                const category = {
                    [+catId]: {
                        name: catItem["G"],
                        products: Object.keys(catItem["B"]).map((id) => +id),
                        id: +catId}
                }
                const catProducts = Object.entries(catItem["B"])
                    .reduce((catProductsAcc, [productId, productItem]) => {
                        const itemDetails: Good = goods.filter(({T}) => T === +productId)[0]
                        if (itemDetails === undefined) return {...catProductsAcc}
                        const product: IProduct = {
                            name: productItem["N"],
                            priceUSD: +itemDetails["C"],
                            categoryId: +itemDetails["G"],
                            count: +itemDetails["P"],
                            id: +productId,
                        }
                        return {...catProductsAcc, [+productId]: product}
                    }, {})
                return {...acc,
                    categories: {...acc.categories, ...category},
                    products: {...acc.products, ...catProducts}
                }
            }, {categories: {}, products: {}})
        return categoriesAndProducts
    })
}