import { StoreonModule } from 'storeon'
import { Good, Catalog, State, Events } from '../interfaces/store'
import {IProduct} from '../interfaces/products'
import {ICategories} from '../interfaces/categories'

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
        return {categories: {}, products: {}}
    })
    store.on('goods/get', async () => {
        try {
            // goods request
            const goods: Response = await getJSONData(`${process.env.API_URL}/products.json`)
            // names request
            const names: Catalog = await getJSONData(`${process.env.API_URL}/names.json`)

            store.dispatch('products/update', { goods: goods.Value.Goods, names: names})
        } catch (e) {
            console.log(e)
            // store.dispatch('errors/server-error')
        }
    })
    store.on('products/update', ({exchangeRate} , {goods, names}) => {
        return Object.entries(names)
            .reduce((acc, [catId, catItem]) => {
                const category: ICategories = {
                    [catId]: {
                        name: catItem["G"],
                        productIds: Object.keys(catItem["B"]).map((id) => id),
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
    store.on('products/updatePrice', ({exchangeRate, products}) => {
        const updatedProducts = Object.entries(products).reduce((acc, [id,product]) => {
            return {...acc, [id]: {...product, price: (product.priceUSD * exchangeRate).toFixed(2)}}
        }, {})
        return {products: {...updatedProducts}}
    })
}