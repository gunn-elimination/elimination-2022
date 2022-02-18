import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CrossHairIcon from "../../../../components/icons/crosshair-icon";
import { API_DOMAIN } from "../../../../helpers/constants"

export default function Index() {
    const router = useRouter();
    const [game, setGame] = useState({} as Record<string, any>);
    useEffect(() => {
        if (!router.query.game) return;
        // fetch game information: such as name/description/basic stuff
        (async function () {
            const response = await fetch(`${API_DOMAIN}/game/${router.query.game}`, {

            });
            if (response.status === 200) {
                setGame(await response.json());
            }
            else {
                console.error(response.text())
            }
        })()
    }, [router]);
    return (
        <div className="h-full w-full  overflow-auto flex flex-col px-10 pb-8 pt-12">
            <h1 className="text-3xl font-bold mb-8">{game.name}</h1>
            <div className="flex gap-4 flex-col">
                <div className="bg-red-500/20 flex flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5">
                    <div className="flex flex-row gap-2 "><CrossHairIcon className="h-5 w-5 my-auto" />
                        <span className="text-lg font-bold ">Yu-Ting Chang</span>
                    </div>
                    <div className="flex flex-row px-10 justify-between">
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">5</span>
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
                        <button className="py-2 px-3 rounded-md bg-black text-white">Kill Yu-Ting</button>
                    </div>

                </div>
                <div className="box">
                    <div className="flex flex-row gap-2 ">
                        <img className="w-5 h-5 rounded-full my-auto" src="/apps/disadus.png" />
                        <span className="text-lg font-bold ">John Li</span>

                    </div>
                    <div className="flex flex-row px-10 justify-between">
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">5</span>
                            <span>kills</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-lg font-bold">#21</span>
                            <span>ranking</span>
                        </div>

                    </div>
                </div>
                <div className="box">
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