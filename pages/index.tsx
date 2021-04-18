import Head from "next/head"
import MainLayout from "../components/Main.layout";

const Index: React.FC = () => {
    return (
        <MainLayout>
            <Head>
                <title>Каталог товаров</title>
            </Head>
            <h1>Каталог товаров</h1>
        </MainLayout>
    )
}

export default Index
