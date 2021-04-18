import Head from "next/head"
import MainLayout from "../components/Main.layout";
import React, {useEffect, useState} from "react";

interface IGood {
    B: boolean,
    C: number,
    G: number,
    P: number,
    T: number
}

interface IResponse {
    Success: string,
    Value?: {
        Goods: Array<IGood>
    }
}

const Index: React.FC = () => {
    const[goods, setGoods] = useState<IGood[]>([] )
    useEffect(() => {
        async function loadGoods() {
            const response = await fetch('https://raw.githubusercontent.com/weehaa/test_nakukop/master/products.json')
            const json: IResponse = await response.json()
            setGoods(json.Value.Goods)
        }
        loadGoods()
    }, [])
    return (
        <MainLayout>
            <Head>
                <title>Каталог товаров</title>
            </Head>
            <h1>Каталог товаров</h1>
            <pre>{JSON.stringify(goods)}</pre>
        </MainLayout>
    )
}

export default Index
