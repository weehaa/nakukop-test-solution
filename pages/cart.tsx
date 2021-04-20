import MainLayout from "../components/Main.layout";
import React from "react";

const Cart: React.FC = () => {
    return (
        <MainLayout title='Корзина'>
            <h1>Корзина</h1>
            <p>Ваша корзина пуста</p>
        </MainLayout>
    )
}

export default Cart