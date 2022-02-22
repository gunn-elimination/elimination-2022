import {useRouter} from "next/router"
import {useContext, useEffect, useState} from "react"
import CrossHairIcon from "../../../../components/icons/crosshair-icon";
import Monogram from "../../../../components/Monogram";
import {API_DOMAIN} from "../../../../helpers/constants"
import {getUserProfile} from "../../../../helpers/fetchCache";
import {UserContext} from "../../../../helpers/usercontext";
import UserIcon from "../../../../components/icons/user-icon";

export default function Index() {
    const user = useContext(UserContext);
    const router = useRouter();
    const [page, setPage] = useState(0)
    const [game, setGame] = useState({} as Record<string, any>);
    const [selfInfo, setSelfInfo] = useState({} as Record<string, any>)
    const [targetInfo, setTargetInfo] = useState({} as Record<string, any>)
    const [leaderboard, setLeaderboard] = useState([] as Array<Record<string, any>>);
    useEffect(() => {
        if (!router.query.game) return;
        // fetch game information: such as name/description/basic stuff
        (async function () {
            const response = await fetch(`${API_DOMAIN}/game/${router.query.game}/`, {});
            if (response.status === 200) {
                setGame(await response.json());
            }
            const selfResp = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/user/@me/`, {
                headers: new Headers({
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                } as HeadersInit)

            });
            if (selfResp.status === 200) {
                const s = await selfResp.json();
                Object.assign(s, user);
                setSelfInfo(s);
                setTargetInfo(await getUserProfile(s.targetID, router.query.game as string))
            } else {
                console.error(await selfResp.text())
            }

            // fetching leaderboard stuff
            const lResp = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/top`, {
                headers: new Headers({
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                } as HeadersInit)
            });
            if (lResp.status === 200) {
                setLeaderboard(await lResp.json().then(l => {
                    return Promise.all(l.map(async function (el: Record<string, any>) {
                        Object.assign(el, await getUserProfile(el.userID, router.query.game as string))
                        return el;
                    }))
                }))
            }


        })()


    }, [router]);
    return (
        <div className="h-full w-full  overflow-auto flex flex-col px-10 pb-8 pt-12">
            <h1 className="text-3xl font-bold mb-8">{game.name}</h1>
            <div className="flex flex-row gap-1 mb-3 rounded-lg p-1">
                {
                    [{name:"Dashboard", state:0}, {name:"Kill Feed", state:1}].map((item)=>{
                       return <a onClick={()=>setPage(item.state)} href="#" className={`grow text-center basis-0 ${page===item.state?'btn-primary text-white':'text-black dark:bg-gray-800 dark:text-white bg-gray-200'} font-semibold  rounded-md px-3 py-2`} key={item.state}>{item.name}</a>
                    })
                }
            </div>
            <div className={`${page===0?'flex':'hidden'} gap-4 h-full flex-row md:flex-col`}>
                <div className={"w-full"}><div className="md:flex grid grid-cols-3 xl:grid-cols-2  lg:grid-cols-1 grow md:flex-col gap-3">

                    <div className="grow dark:bg-red-700/20 bg-red-600/10 flex justify-[normal] flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5">
                        <div className="flex justify-center flex-col gap-2">
                            <div className="flex flex-row gap-2 ml-1 mb-1"><CrossHairIcon className="h-3 w-3 my-auto"/>
                                <span className="text-md my-auto font-bold ">Your Target</span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Monogram user={targetInfo}/>
                                <span
                                    className="text-lg my-auto font-bold ">{targetInfo.firstName} {targetInfo.lastName}</span>
                            </div>
                        </div>
                        <div className="flex flex-row px-10 gap-5 justify-around">
                            <div className="flex flex-col text-center">
                                <span className="text-lg font-bold">{targetInfo.kills}</span>
                                <span>kills</span>
                            </div>
                            <div className="flex flex-col text-center">
                                    <span
                                        className="text-lg font-bold">#{leaderboard.findIndex(e => e.userID === targetInfo.userID) + 1}</span>
                                <span>ranking</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col  w-full box">
                        <span className="text-lg font-bold">Controls</span>
                        <div className="px-5 text-center align-center grid grid-cols-1 mx-auto gap-2">
                            <button
                                className="py-2 px-3 hover:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black dark:border-white  hover:text-white rounded-md border-black border-2 text-black">Display
                                kill code
                            </button>
                            <button
                                className="py-2 px-3 dark:bg-white dark:text-black rounded-md bg-black text-white">Kill {targetInfo.firstName}</button>
                        </div>

                    </div>

                    <div className=" box min-w-fit">
                        <div className="flex flex-row gap-2 ml-1 mb-1"><UserIcon className="h-3 w-3 my-auto"/>
                            <span className="text-md my-auto font-bold ">You</span>
                        </div>
                        <div className="flex flex-row gap-2 ">
                            <Monogram className={"h-7 w-7"} user={selfInfo}/>
                            <span className="text-lg my-auto font-bold ">{user?.firstName} {user?.lastName}</span>

                        </div>
                        <div className="flex flex-row md:px-10 px-5 gap-5 justify-around">
                            <div className="flex flex-col text-center">
                                <span className="text-lg font-bold">{selfInfo.kills}</span>
                                <span>kills</span>
                            </div>
                            <div className="flex flex-col text-center">
                                    <span
                                        className="text-lg font-bold">#{leaderboard.findIndex(e => e.userID === user?.userID) + 1}</span>
                                <span>ranking</span>
                            </div>

                        </div>
                    </div>

                </div></div>

                <div className="ml-auto md:w-auto min-w-fit md:ml-0">
                    <div className="box h-full md:max-h-72">
                        <span className="text-lg font-bold">Leaderboard</span>
                        <div className={'flex flex-row justify-between text-md font-semibold'}>
                            <span>Rank</span>
                            <span>Kills</span>
                        </div>

                        <div className="overflow-auto flex flex-col gap-2 h-full">
                            {
                                leaderboard.map((el, idx, arr) => (
                                    <div className={'flex flex-row gap-3'} key={idx}>
                                        <span
                                            className="my-auto font-bold font-mono">{String(idx + 1).padStart(3, '0')}</span>
                                        <Monogram small className={'my-auto'} user={el}/>
                                        <span
                                            className={"my-auto font-semibold mr-5"}>{el.firstName} {el.lastName}</span>
                                        <span className={"my-auto ml-auto"}>{el.kills}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${page===1?'block':'hidden'} h-full w-full`}>
                <div className={"box"}>
                    <span>Kill Feed</span>
                </div>
            </div>
        </div>
    )
}
