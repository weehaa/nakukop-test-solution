import MainLayout from '../components/Main.layout';
import React, {ReactNode, useEffect, useState} from 'react';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';

interface Good {
    B: boolean,
    C: number,
    G: number,
    P: number,
    T: number
}

interface Response {
    Success: string,
    Value?: {
        Goods: Array<Good>
    }
}

type ComponentState = 'error' | 'loading' | 'loaded'

const Index: React.FC = () => {
    const [state, setState] = useState<ComponentState>('loading')
    const [goods, setGoods] = useState<Good[]>([] )
    useEffect(() => {
        async function loadGoods() {
            const response = await fetch(`${process.env.API_URL}/products.json`)
            const json: Response = await response.json()
            setGoods(json.Value.Goods)
        }
        loadGoods()
            .then(() => setState('loaded'))
            .catch(
            err => {
                console.log('error', err)
                setState('error')
            })
     }, [])

    let content: ReactNode;

    switch (state) {
        case 'error':
            content =  <ErrorIndicator message='No response form server, please check your internet connection!'/>
            break
        case 'loading':
            content = <div>Loading...</div>
            break
        case 'loaded':
            content = <pre>{JSON.stringify(goods)}</pre>
    }

    return (
        <MainLayout title='Каталог товаров'>
            <h1>Каталог товаров</h1>
            { content }
        </MainLayout>
    )
}

export default Index
