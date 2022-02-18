import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { API_DOMAIN } from "../../helpers/constants";
import { UserContext } from "../../helpers/usercontext";

export default function Index() {
  const user = useContext(UserContext);
  const [games, setGames] = useState([] as any[]);
  useEffect(() => {
      (async function () {
          const response = await fetch(`${API_DOMAIN}/games`, {
              headers: new Headers({
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              })
          });
          if (response.status === 200){
            const g = await Promise.all((await response.json()).map(async function (x:any){
                x.joined = (await (await fetch(`${API_DOMAIN}/game/${x.id}/joined`, {
                    headers: new Headers({
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    })
                })).json()).joined;
                return x
            }))
            setGames(g)
          }
          else {
              console.log(response.status, await response.text())
          }
      })()

  }, [])
  const joinGame = useCallback(async (gameID)=>{
    const response = await fetch(`${API_DOMAIN}/game/${gameID}/join`, {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        })
    });
    if (response.status === 200){
        
    }
    else {

    }
  },[games])

  return (
    <div className="h-full w-full bg-gray-100 dark:bg-gray-900 overflow-auto flex flex-col px-10 py-8">
        <h1 className="text-3xl font-bold mb-8">Games</h1>
        <div className="flex flex-col">
            {
                games.map((g:any)=>(
            <div key={g.id} className="py-3 px-4 rounded-md shadow dark:bg-gray-200/20 bg-white ">
                <span className="text-lg font-bold">{g.name}</span>
                <span></span>
                <p className="whitespace-pre-wrap opacity-50 text-xs">{g.description}</p>
                <div>
                    {g.joined?                     <a href={`/app/${g.id}`} className="btn-primary !py-2 !px-3 float-right">Open</a>
:                     <button onClick={()=>joinGame(g.id)} className="btn-primary !py-2 !px-3 float-right">Join</button>
}
                </div>
            </div>))
            }
        </div>
    </div>
  );
}