import {AppProps} from 'next/app';
import '../styles/globals.css';
import Head from "next/head";


export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Gunn Elimination 2022</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
