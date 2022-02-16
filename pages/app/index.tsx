import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { API_DOMAIN } from "../../helpers/constants";
import { UserContext } from "../../helpers/usercontext";

export default function Index() {
  const user = useContext(UserContext);
  const [games, setGames] = useState([]);
  useEffect(() => {
      (async function () {
          const response = await fetch(`${API_DOMAIN}/games`, {
              headers: new Headers({
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              })
          });
          if (response.status === 200){
            const g = await response.json()
            setGames(g)
          }
          else {
              console.log(response.status, await response.text())
          }
      })()

  }, [])
  const joinGame = useCallback(async (gameID)=>{
    const response = await fetch(`${API_DOMAIN}/games/${gameID}/join`, {
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
    <div className="h-full w-full bg-gray-50 flex flex-col px-10 pt-8 mb-8">
        <h1 className="text-2xl font-bold tracking-wide mb-8">Games</h1>
        <div className="flex flex-col">
            {
                games.map((g:any)=>(
            <div key={g.id} className="py-2 px-3 rounded-md shadow bg-white ">
                <span className="text-lg font-bold">{g.name}</span>
                <p className="whitespace-pre-wrap">{g.description}</p>
                <div>
                    <button onClick={()=>joinGame(g.id)} className="btn-primary !py-2 !px-3 float-right">Join</button>
                </div>
            </div>))
            }
        </div>
    </div>
  );
}