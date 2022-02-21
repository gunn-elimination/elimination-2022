import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import CrossHairIcon from "../../../../components/icons/crosshair-icon";
import Monogram from "../../../../components/Monogram";
import { API_DOMAIN } from "../../../../helpers/constants"
import { UserContext } from "../../../../helpers/usercontext";

export default function Index() {
    const user = useContext(UserContext);
    const router = useRouter();
    const [game, setGame] = useState({} as Record<string, any>);
    const [selfInfo, setSelfInfo] = useState({} as Record<string, any>)
    const [targetInfo, setTargetInfo] = useState({} as Record<string, any>)
    useEffect(() => {
        if (!router.query.game) return;
        // fetch game information: such as name/description/basic stuff
        (async function () {
            const response = await fetch(`${API_DOMAIN}/game/${router.query.game}/`, {

            });
            if (response.status === 200) {
                setGame(await response.json());
            }
            else {
                console.error(response.text())
            }

            const selfResp = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/user/@me/`, {
                headers: new Headers({
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                } as HeadersInit)

            });
            if (selfResp.status === 200) {
                const s = await selfResp.json();
                setSelfInfo(s);
                const targetResp = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/user/${s.targetID}/`, {
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    } as HeadersInit)

                });
                if (targetResp.status === 200) {
                    const t = await targetResp.json();
                    const targetUser = await fetch(`${API_DOMAIN}/users/${s.targetID}/`, {
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        } as HeadersInit)
    
                    });
                    if (targetUser.status === 200) {
                        Object.assign(t, await targetUser.json())
                    }
                    else {
                        console.error(await targetUser.text())
                    }
                    setTargetInfo(t);

                }
                else {
                    console.error(await targetResp.text())
                }
            }
            else {
                console.error(await selfResp.text())
            }



        })()
    }, [router]);
    return (
        <div className="h-full w-full  overflow-auto flex flex-col px-10 pb-8 pt-12">
            <h1 className="text-3xl font-bold mb-8">{game.name}</h1>
            <div className="flex gap-4 flex-col">
                <div className="bg-red-500/20 flex flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5">
                    <div className="flex flex-row gap-2 "><CrossHairIcon className="h-4 w-4 my-auto" />
                        <span className="text-base my-auto font-bold ">Your Target</span>
                    </div>
                    <div className="flex flex-row gap-2">
                    <Monogram firstName={targetInfo?.firstName} lastName={targetInfo?.lastName} />
                        <span className="text-lg my-auto font-bold ">{targetInfo.firstName} {targetInfo.lastName}</span>
                    </div>
                    <div className="flex flex-row px-10 justify-between">
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">{targetInfo.kills}</span>
                            <span>kills</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">#21</span>
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
                    <div className="flex flex-row gap-2 ">
                        <Monogram firstName={user?.firstName} lastName={user?.lastName} />
                        <span className="text-lg my-auto font-bold ">{user?.firstName} {user?.lastName}</span>

                    </div>
                    <div className="flex flex-row px-10 justify-between">
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">{selfInfo.kills}</span>
                            <span>kills</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">#21</span>
                            <span>ranking</span>
                        </div>

                    </div>
                </div>
                <div className="box max-h-72">
                    <span className="text-lg font-bold">Leaderboard</span>
                    <div className="overflow-auto flex flex-col h-full">
                        {
                            new Array(75).fill(undefined).map(() => (
                                <div>
                                    hello
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}