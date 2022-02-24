import {useRouter} from "next/router"
import {useCallback, useContext, useEffect, useState} from "react"
import CrossHairIcon from "../../../../components/icons/crosshair-icon";
import Monogram from "../../../../components/Monogram";
import {API_DOMAIN} from "../../../../helpers/constants"
import {getUserProfile} from "../../../../helpers/fetchCache";
import {UserContext} from "../../../../helpers/usercontext";
import UserIcon from "../../../../components/icons/user-icon";
import TextBox from "../../../../components/textbox";
import ErrorAlert from "../../../../components/ErrorAlert";
import SuccessAlert from "../../../../components/SuccessAlert";

export default function Index() {
    const user = useContext(UserContext);
    const router = useRouter();
    const [page, setPage] = useState(0)
    const [showCode, setShowCode] = useState(false)
    const [game, setGame] = useState({} as Record<string, any>);
    const [selfInfo, setSelfInfo] = useState({} as Record<string, any>)
    const [targetInfo, setTargetInfo] = useState({} as Record<string, any>)
    const [leaderboard, setLeaderboard] = useState([] as Array<Record<string, any>>);
    const [killCode, setKillCode] = useState('')
    const [killError, setKillError] = useState('')
    const [killSuccess, setKillSuccess] = useState(false)
    const [killFeed, setKillFeed] = useState([] as Array<Record<string, any>>);
    const [a, setA] = useState(null as null | Record<string, any>)
    useEffect(() => {
        if (!router.query.game) return;
        // fetch game information: such as name/description/basic stuff
        (async function () {
            const response = await fetch(`${API_DOMAIN}/game/${router.query.game}/`, {});
            if (response.status === 200) {
                setGame(await response.json());
            }
            const aR = await fetch(`${API_DOMAIN}/game/${router.query.game}/announcements`);
            setA((await aR.json())[0])
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
            const kResp = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/kills`, {
                headers: new Headers({
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                } as HeadersInit)
            });
            if (kResp.status === 200) {
                setKillFeed(await kResp.json().then(l => {
                    return Promise.all(l.map(async function (el: Record<string, any>) {
                        el.targetUser = {}
                        Object.assign(el.targetUser, await getUserProfile(el.target, router.query.game as string))
                        el.entityUser = {}
                        Object.assign(el.entityUser, await getUserProfile(el.entity, router.query.game as string))
                        return el;
                    }))
                }))
            }

        })()


    }, [router]);
    const eliminateTarget = useCallback(async ()=>{
        const response = await fetch(`${API_DOMAIN}/elimination/game/${router.query.game}/user/${targetInfo.userID}/eliminate`, {
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            } as HeadersInit),
            method:'POST',
            body:JSON.stringify({
                eliminationCode:killCode
            })
        })
        if (response.status===200){
            setKillError('');
            setKillSuccess(true)
        }
        else {
            setKillError((await response.json()).error)
        }
    }, [user, targetInfo, killCode])
    return (
        <div className="h-full w-full  overflow-auto flex flex-col px-10 pb-8 pt-12">
            <h1 className="text-3xl font-bold mb-8">{game.name}</h1>

            {game.start ? <>
                <div className="flex flex-row gap-1 mb-3 rounded-lg p-1">
                    {
                        [{name: "Dashboard", state: 0}, {name: "Kill Feed", state: 1}].map((item) => {
                            return <a onClick={() => setPage(item.state)} href="#"
                                      className={`grow text-center basis-0 ${page === item.state ? 'btn-primary text-white' : 'text-black dark:bg-gray-800 dark:text-white bg-gray-200'} font-semibold  rounded-md px-3 py-2`}
                                      key={item.state}>{item.name}</a>
                        })
                    }
                </div>
                <div className={'rounded-md mb-2 bg-amber-500/20 text-amber-900 px-3 py-2 flex flex-row gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px] shrink-0 mt-1 mb-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                    </svg>
                    {a && <div>
                        <h2 className={'text-lg font-bold'}>Announcement</h2>
                        <span>{new Date(a.time).toLocaleDateString()} {new Date(a.time).toLocaleTimeString()}</span>
                        <p>{a.message}</p>
                    </div>}
                </div>
                <div className={`${page === 0 ? 'flex' : 'hidden'} gap-4 h-full flex-row md:flex-col`}>
                <div className={"w-full"}>
                <div className="md:flex grid grid-cols-3 xl:grid-cols-2  lg:grid-cols-1 grow md:flex-col gap-3">

                <div
                className="grow dark:bg-red-700/20 bg-red-600/10 flex justify-[normal] flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5">
                <div className="flex justify-center flex-col gap-2">
                <div className="flex flex-row gap-2 ml-1 mb-1"><CrossHairIcon
                className="h-3 w-3 my-auto"/>
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
            {showCode && <span className='font-mono'>{selfInfo.secret}</span>}
                <button
                onClick={()=>setShowCode(!showCode)}
                className="py-2 px-3 hover:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black dark:border-white  hover:text-white rounded-md border-black border-2 text-black">
            {showCode?'Hide':'Display'} kill code
                </button>
            {killSuccess && <SuccessAlert message={`${targetInfo.firstName} has been successfully eliminated! Good job!`}/>}
            {killError && <ErrorAlert message={killError}></ErrorAlert>}
                <TextBox onChange={(e)=>{setKillCode(e.target.value)}} placeholder={`Enter ${targetInfo.firstName}'s kill code`}/>
                <button
                onClick={()=>eliminateTarget()}
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

                </div>
                </div>

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
                <div className={`${page === 1 ? 'block' : 'hidden'} h-full w-full`}>
                <div className={"box"}>
                <span>Kill Feed</span>
                <div className="flex flex-col">
            {killFeed.map((item) => {
                return <div
                className="border-b-2 items-center last-of-type:border-b-0 border-white/10  px-3 flex flex-row gap-2 py-2 my-1">
            {new Date(item.at).toLocaleDateString()} {new Date(item.at).toLocaleTimeString()}
                <Monogram small className={"shrink-0 "} user={item.entityUser}/> <span
                className={'font-semibold'}>{item.entityUser.firstName} {item.entityUser.lastName}</span> {item.type}ed <Monogram
                small className='shrink-0' user={item.targetUser}/> <span
                className={"font-semibold"}>{item.targetUser.firstName} {item.targetUser.lastName}</span>
                </div>
            })}
                </div>

                </div>
                </div>
                </>
                :
                <div className={'flex flex-col h-full w-full'}>
                    <span className='mx-auto link-brand my-auto text-4xl'>Waiting for this game to start...</span>
                </div>
            }
        </div>
    )
}
