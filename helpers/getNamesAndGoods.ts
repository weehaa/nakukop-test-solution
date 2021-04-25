import {Catalog, Good, Response} from '../interfaces/store'
import getJSONData from './getJSONData'

const getNamesAndGoods = async (): Promise<{names: Catalog, goods: Good[]}> => {
    // goods
    const goodsRes: Response = await getJSONData(`${process.env.API_URL}/products.json`)
    const goods = goodsRes.Value.Goods
    // names request
    const names: Catalog = await getJSONData(`${process.env.API_URL}/names.json`)
    return {names, goods}
}

export default getNamesAndGoods