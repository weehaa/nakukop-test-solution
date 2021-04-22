import { StoreonModule } from 'storeon'
import { Good, Catalog, State, Events } from './storeInterfaces'

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
        } catch (e) {
            console.log(e)
            // store.dispatch('errors/server-error')
        }
    })
    store.on('goods/update', ({ goods} , newGoods) => ({goods: newGoods}))
    store.on('names/update', ({ names} , newNames) => ({names: newNames}))
}