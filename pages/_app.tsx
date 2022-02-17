import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import ThemeButton from "../components/themeButton";
import { UserContext } from "../helpers/usercontext";
import { useCurrentUser } from "../helpers/useCurrentUser";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const ROUTES = [
    {
      name:'Games',
      path: '/app'
    },
    {
      name: 'Settings',
      path: '/app/settings'
    }
  ]
  useEffect(() => {
    const { token } = router.query;
    if (token) {
      localStorage.setItem('token', token as string);
    }
  }, [])
  const user = useCurrentUser();
  useEffect(() => {
    const darkMode =
      JSON.parse("" + localStorage.getItem("gunnelimination:darkMode")) ||
      (!("gunnelimination:darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.body.parentElement?.classList.toggle("dark", darkMode);
  });

  const toggleTheme = useCallback(() => {
    const isDark = "" + document.body.parentElement?.classList.toggle("dark");
    localStorage.setItem("gunnelimination:darkMode", isDark);
  }, []);
  return (
    <>
      <button
        onClick={toggleTheme}
        className="absolute z-20 px-2 py-2 rounded-full hover:bg-rose-500/50 top-2 right-2"
      >
        <ThemeButton />
      </button>
      <Head>
        <title>Gunn Elimination 2022</title>
      </Head>
      <UserContext.Provider value={user}>
      <div className="w-full flex flex-row h-full dark:bg-gray-800 ">
      <div className={`${!router.route.startsWith('/app') && 'hidden'} flex flex-col w-60 px-3 dark:bg-gray-400/10  bg-gray-200/80`}>
        <h1 className="text-2xl font-extrabold text-center block tracking-wider my-8">Elimination</h1>
        <hr className="-mx-3 py-2 border-1 dark:border-white/10 border-black/10" />
        <div className="my-4 p-1 flex flex-col gap-1">
          {
            ROUTES.map(({name, path})=>(
              <a href={path} key={path} className={` text-center px-3 py-2  ${router.route === path? 'btn-primary':'bg-transparent dark:text-white/80 text-black/80'}  rounded-md`}>
                {name}
              </a>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col grow  w-full">
      <Component {...pageProps} />
      </div>
    </div>
       
      </UserContext.Provider>
    </>
  );
}
