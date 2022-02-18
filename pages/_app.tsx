import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import ThemeButton from "../components/themeButton";
import { UserContext } from "../helpers/usercontext";
import { useCurrentUser } from "../helpers/useCurrentUser";
import { useRouter } from "next/router";
import loadable from '@loadable/component'; const Sidebar = loadable(() => import('../components/sidebar'))
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
          {
            router.pathname.startsWith('/app') && <Sidebar />
          }
          <div className="flex bg-gray-100 dark:bg-gray-900 flex-col grow  w-full">
            <Component {...pageProps} />
          </div>
        </div>

      </UserContext.Provider>
    </>
  );
}
