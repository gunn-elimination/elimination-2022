import { useEffect, useState } from "react";
import { API_DOMAIN } from "../../../helpers/constants";
import App from "../../app";

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {
        (async function () {
            const response = await fetch(`${API_DOMAIN}/games/leaderboard`, {
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                })
            });
            if (response.status === 200){
            const ldbd = await response.json()
            setLeaderboard(ldbd)
            }
            else {
                console.log(response.status, await response.text())
            }
        })()

    }, [])
    return (
        <div className="h-full w-full flex flex-col px-10 pt-8">
            <h1 className="text-2xl font-bold tracking-wide ">Leaderboard</h1>
            <div>
                {JSON.stringify(leaderboard)}
            </div>
        </div>
        )
}