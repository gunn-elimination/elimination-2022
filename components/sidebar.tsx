import { useRouter } from "next/router"
import { useState } from "react"
import { pathToFileURL } from "url"
import MenuIcon from "./icons/menu-icon"
import XIcon from "./icons/x-icon"

export default function sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const router = useRouter()
    const ROUTES = [
        {
            name: 'Games',
            path: '/app',
            isValid(path:string){
                return path.startsWith('/app/game') || path === '/app'
            }
        },
        {
            name: 'About',
            path: '/app/about',
            isValid(path:string){
                return path.startsWith('/app/about');
            }
        }
    ]
    return (
        <>
            {!sidebar && <button onClick={() => setSidebar(!sidebar)} className="absolute z-20 top-4 left-4"><MenuIcon/></button>}
            <div className="sm:absolute flex top-0 left-0 h-full overflow-y-scroll !overflow-x-hidden scrollbar-none pointer-events-auto z-[1000]">
                <div className={`${sidebar? "w-60":"inf:w-60 sm:w-0"} top-0 left-0 hidden sm:block h-full transition-all duration-200`}></div>
                <div className={`${sidebar?
                    " w-60"
                    :"inf:w-60 sm:w-0 lg:overflow-hidden"}
                    dark:bg-gray-800 bg-gray-200  transition-all transform z-[1000] sm:absolute top-0 pointer-events-auto flex flex-col  duration-200 min-h-[100%] `}>
                    <div className={`w-full h-full flex flex-col px-3  relative `}>
                        <button onClick={() => setSidebar(!sidebar)} className="absolute top-4 right-4 hidden sm:block">
                            <XIcon/></button>
                        <h1 className="text-2xl  font-extrabold text-center block tracking-wider my-8">Elimination</h1>
                        <hr className="-mx-3 py-2 border-1 dark:border-white/10 border-black/10" />
                        <div className="my-4 p-1 flex flex-col gap-1">
                            {
                                ROUTES.map(({ name, path, isValid }) => (
                                    <a href={path} key={path} className={` text-center px-3 py-2  ${isValid(router.pathname) ? 'btn-primary' : 'bg-transparent dark:text-white/80 text-black/80'}  rounded-md`}>
                                        {name}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
