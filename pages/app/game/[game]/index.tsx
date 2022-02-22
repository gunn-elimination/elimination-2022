import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import CrossHairIcon from "../../../../components/icons/crosshair-icon";
import Monogram from "../../../../components/Monogram";
import { API_DOMAIN } from "../../../../helpers/constants"
import {getUserProfile} from "../../../../helpers/fetchCache";
import { UserContext } from "../../../../helpers/usercontext";
import UserIcon from "../../../../components/icons/user-icon";

export default function Index() {
    const user = useContext(UserContext);
    const router = useRouter();
    const [game, setGame] = useState({} as Record<string, any>);
    const [selfInfo, setSelfInfo] = useState({} as Record<string, any>)
    const [targetInfo, setTargetInfo] = useState({} as Record<string, any>)
    const [leaderboard, setLeaderboard] = useState([] as Array<Record<string, any>>);
    useEffect(() => {
        if (!router.query.game) return;
        // fetch game information: such as name/description/basic stuff
        (async function () {
            const response = await fetch(`${API_DOMAIN}/game/${router.query.game}/`, {

            });
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
            }
            else {
                console.error(await selfResp.text())
            }

            // fetching leaderboard stuff
            const lResp = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/top`, {
                headers: new Headers({
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                } as HeadersInit)
            });
            if (lResp.status === 200){
                setLeaderboard(await lResp.json().then(l=>{
                    return Promise.all( l.map(async function(el:Record<string, any>){
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
            <div className="flex gap-4 flex-col">
                <div className="bg-red-600/10 flex flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5">
                    <div className="flex flex-row gap-2 ml-1 mb-1"><CrossHairIcon className="h-3 w-3 my-auto" />
                        <span className="text-sm my-auto font-bold ">Your Target</span>
                    </div>
                    <div className="flex flex-row gap-2">
                    <Monogram  user={targetInfo} />
                        <span className="text-lg my-auto font-bold ">{targetInfo.firstName} {targetInfo.lastName}</span>
                    </div>
                    <div className="flex flex-row px-10 justify-between">
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">{targetInfo.kills}</span>
                            <span>kills</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">#{leaderboard.findIndex(e=>e.userID===targetInfo.userID) + 1}</span>
                            <span>ranking</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <span className="text-lg font-bold">Controls</span>
                    <div className="px-5 text-center flex flex-col gap-2">
                        <button className="py-2 px-3 rounded-md bg-black text-white">Display kill code</button>
                        <button className="py-2 px-3 rounded-md bg-black text-white">Kill {targetInfo.firstName}</button>
                    </div>

                </div>
                <div className="box">
                    <div className="flex flex-row gap-2 ml-1 mb-1"><UserIcon className="h-3 w-3 my-auto" />
                        <span className="text-sm my-auto font-bold ">You</span>
                    </div>
                    <div className="flex flex-row gap-2 ">
                        <Monogram className={"h-7 w-7"} user={selfInfo} />
                        <span className="text-lg my-auto font-bold ">{user?.firstName} {user?.lastName}</span>

                    </div>
                    <div className="flex flex-row px-10 justify-between">
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">{selfInfo.kills}</span>
                            <span>kills</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">#{leaderboard.findIndex(e=>e.userID===user?.userID) + 1}</span>
                            <span>ranking</span>
                        </div>

                    </div>
                </div>
                <div className="box max-h-72">
                    <span className="text-lg font-bold">Leaderboard</span>
                    <div className={'flex flex-row justify-between text-sm font-semibold'}>
                        <span>Rank</span>
                        <span>Kills</span>
                    </div>

                    <div className="overflow-auto flex flex-col gap-2 h-full">
                        {
                            leaderboard.map((el, idx, arr) => (
                                <div className={'flex flex-row  gap-2'} key={idx}>
                                   <span className="my-auto font-bold font-mono">{String(idx+1).padStart(3, '0')}</span>
                                    <Monogram small className={'my-auto'} user={el} />
                                    <span className={"my-auto font-semibold mr-auto"}>{el.firstName} {el.lastName}</span>
                                    <span className={"my-auto ml-auto"}>{el.kills}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
