import {AppProps} from 'next/app';
import '../styles/globals.css';
import Head from "next/head";
import { useCallback, useEffect } from 'react';
import ThemeButton from '../components/themeButton';

export default function MyApp({Component, pageProps}: AppProps) {
    useEffect(()=>{
        const darkMode = JSON.parse(''+localStorage.getItem('gunnelimination:darkMode'))
        console.log(darkMode)
        document.body.parentElement?.classList.toggle('dark', darkMode)
    })
    
    const toggleTheme = useCallback(()=>{
        const isDark = ''+document.body.parentElement?.classList.toggle('dark')
        localStorage.setItem('gunnelimination:darkMode', isDark)
    },[])
    return (
        <>
        <button onClick={toggleTheme} className='absolute py-2 px-2 dark:hover:bg-black/20 rounded-lg hover:bg-white/20 top-2 right-2'>
            <ThemeButton/>
        </button>
            <Head>
                <title>Gunn Elimination 2022</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
