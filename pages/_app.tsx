import {AppProps} from 'next/app';
import '../styles/globals.css';
import Head from "next/head";
import { useCallback, useEffect } from 'react';
import ThemeButton from '../components/themeButton';
import { UserContext, UserContextProvider } from '../helpers/usercontext';

export default function MyApp({Component, pageProps}: AppProps) {

    useEffect(()=>{
        const darkMode = JSON.parse(''+localStorage.getItem('gunnelimination:darkMode')) || (!('gunnelimination:darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        document.body.parentElement?.classList.toggle('dark', darkMode);
    })
    
    const toggleTheme = useCallback(()=>{
        const isDark = ''+document.body.parentElement?.classList.toggle('dark')
        localStorage.setItem('gunnelimination:darkMode', isDark)
    },[])
    return (
        <>
        <button onClick={toggleTheme} className='absolute py-2 px-2  hover:bg-rose-500/50 rounded-full  top-2 right-2'>
            <ThemeButton/>
        </button>
            <Head>
                <title>Gunn Elimination 2022</title>
            </Head>
            <UserContextProvider value={user}>
                <Component {...pageProps} />
            </UserContextProvider>
            
        </>
    );
}
