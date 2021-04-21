import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Nakukop test</title>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="NAKUKOP test solution1" />
                    <meta name="keywords" content="books, food, car parts, food, souvenirs" />
                    <meta name="author" content="Alexei Veselov" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}