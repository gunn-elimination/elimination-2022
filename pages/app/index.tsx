import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { API_DOMAIN } from "../../helpers/constants";
import { UserContext } from "../../helpers/usercontext";

export default function Index() {
  const user = useContext(UserContext);
  const router = useRouter();
  const [games, setGames] = useState([] as any[]);
  useEffect(() => {
    (async function () {
      const response = await fetch(`${API_DOMAIN}/games`, {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      });
      if (response.status === 200) {
        const g = await Promise.all(
          (
            await response.json()
          ).map(async function (x: any) {
            x.joined = (
              await (
                await fetch(`${API_DOMAIN}/game/${x.id}/joined`, {
                  headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  }),
                })
              ).json()
            ).joined;
            return x;
          })
        );
        setGames(g);
      } else {
        console.log(response.status, await response.text());
      }
    })();
  }, [router.query]);
  const joinGame = useCallback(
    async (gameID) => {
      const response = await fetch(`${API_DOMAIN}/game/${gameID}/join`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      });
      if (response.status === 200) {
        await router.push(`/app/game/${gameID}`);
      } else {
      }
    },
    [games]
  );
  useLayoutEffect(() => {
    if (router.query.token && typeof router.query.token === "string") {
      localStorage.setItem("token", router.query.token as string);
    }
  }, [router.query]);
  return (
    <div className="flex flex-col w-full h-full px-10 py-8 overflow-auto">
      <h1 className="mb-8 text-3xl font-bold">Games</h1>
      <div className="flex flex-col">
        {games.map((g: any) => (
          <div
            key={g.id}
            className="px-4 py-3 my-2 bg-white rounded-md shadow dark:bg-gray-800 "
          >
            <span className="text-lg font-bold">{g.name}</span>
            <span></span>
            <p className="text-xs whitespace-pre-wrap opacity-50">
              {g.description}
            </p>
            <div>
              {g.joined ? (
                <a
                  href={`/app/game/${g.id}`}
                  className="btn-primary !py-2 !px-3 float-right"
                >
                  Open
                </a>
              ) : (
                <button
                  onClick={() => joinGame(g.id)}
                  className="btn-primary !py-2 !px-3 float-right"
                >
                  Join
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
