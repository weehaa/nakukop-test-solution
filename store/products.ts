import { StoreonModule } from 'storeon'
import { Good, Catalog, State, Events } from './storeInterfaces'

interface Response {
    Success: string,
    Value?: {
        Goods: Array<Good>
    }
}

export const goodsModule:  StoreonModule<State, Events> = store => {
    store.on('@init', () => {
        store.dispatch('goods/get')
        return {goods: [], names:{}}
    })
    store.on('goods/get', async () => {
        try {
            // goods request
            const responseGoods = await fetch(`${process.env.API_URL}/products.json`)
            const goods: Response = await responseGoods.json()
            // names request
            const responseNames = await fetch(`${process.env.API_URL}/names.json`)
            const names: Catalog = await responseNames.json()
            // save names and goods into store
            store.dispatch('goods/update', goods.Value.Goods)
            store.dispatch('names/update', names)
        } catch (e) {
            console.log(e)
            // store.dispatch('errors/server-error')
        }
    })
    store.on('goods/update', ({ goods} , newGoods) => ({goods: newGoods}))
    store.on('names/update', ({ names} , newNames) => ({names: newNames}))
}