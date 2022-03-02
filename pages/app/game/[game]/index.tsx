import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import CrossHairIcon from "../../../../components/icons/crosshair-icon";
import Monogram from "../../../../components/Monogram";
import { API_DOMAIN } from "../../../../helpers/constants";
import { getUserProfile } from "../../../../helpers/fetchCache";
import { UserContext } from "../../../../helpers/usercontext";
import UserIcon from "../../../../components/icons/user-icon";
import TextBox from "../../../../components/textbox";
import ErrorAlert from "../../../../components/ErrorAlert";
import SuccessAlert from "../../../../components/SuccessAlert";

export default function Index() {
  const user = useContext(UserContext);
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [game, setGame] = useState({} as Record<string, any>);
  const [selfInfo, setSelfInfo] = useState({} as Record<string, any>);
  const [targetInfo, setTargetInfo] = useState({} as Record<string, any>);
  const [leaderboard, setLeaderboard] = useState(
    [] as Array<Record<string, any>>
  );
  const [killCode, setKillCode] = useState("");
  const [killError, setKillError] = useState("");
  const [killSuccess, setKillSuccess] = useState(false);
  const [killFeed, setKillFeed] = useState([] as Array<Record<string, any>>);
  const [a, setA] = useState(null as null | Record<string, any>);
  const [forceKillUsername, setForceKillUsername] = useState("");
  const [reviveUsername, setReviveUsername] = useState("");
  useEffect(() => {
    if (!router.query.game) return;
    // fetch game information: such as name/description/basic stuff
    (async function () {
      const response = await fetch(
        `${API_DOMAIN}/game/${router.query.game}/`,
        {}
      );
      if (response.status === 200) {
        setGame(await response.json());
      }
      const aR = await fetch(
        `${API_DOMAIN}/game/${router.query.game}/announcements`
      );
      const announcements = await aR.json();
      setA(announcements.sort((a: any, b: any) => b.time - a.time)[0]);
      console.log(announcements);
      const selfResp = await fetch(
        `${API_DOMAIN}/elimination/game/${router.query.game}/user/@me/`,
        {
          headers: new Headers({
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          } as HeadersInit),
        }
      );
      if (selfResp.status === 200) {
        const s = await selfResp.json();
        Object.assign(s, user);
        setSelfInfo(s);
        setTargetInfo(
          await getUserProfile(s.targetID, router.query.game as string)
        );
      } else {
        console.error(await selfResp.text());
      }

      // fetching leaderboard stuff
      const lResp = await fetch(
        `${API_DOMAIN}/elimination/game/${router.query.game}/top`,
        {
          headers: new Headers({
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          } as HeadersInit),
        }
      );
      if (lResp.status === 200) {
        setLeaderboard(
          await lResp.json().then((l) => {
            return Promise.all(
              l.map(async function (el: Record<string, any>) {
                Object.assign(
                  el,
                  await getUserProfile(el.userID, router.query.game as string)
                );
                return el;
              })
            );
          })
        );
      }
      const kResp = await fetch(
        `${API_DOMAIN}/elimination/game/${router.query.game}/kills`,
        {
          headers: new Headers({
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          } as HeadersInit),
        }
      );
      if (kResp.status === 200) {
        setKillFeed(
          await kResp.json().then((l) => {
            return Promise.all(
              l.map(async function (el: Record<string, any>) {
                el.targetUser = {};
                Object.assign(
                  el.targetUser,
                  await getUserProfile(el.target, router.query.game as string)
                );
                el.entityUser = {};
                Object.assign(
                  el.entityUser,
                  await getUserProfile(el.entity, router.query.game as string)
                );
                return el;
              })
            );
          })
        );
      }
    })();
  }, [router.query]);
  const eliminateTarget = useCallback(async () => {
    const response = await fetch(
      `${API_DOMAIN}/elimination/game/${router.query.game}/user/${targetInfo.userID}/eliminate`,
      {
        headers: new Headers({
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        } as HeadersInit),
        method: "POST",
        body: JSON.stringify({
          eliminationCode: killCode,
        }),
      }
    );
    if (response.status === 200) {
      setKillError("");
      setKillSuccess(true);
    } else {
      setKillError((await response.json()).error);
    }
  }, [user, targetInfo, killCode]);
  // { name: "Elimination Feed", state: 1 },
  const tabs = [
    { name: "Dashboard", state: 0 },
    { name: "Elimination Feed", state: 1 },
  ];
  if (user?.admin) {
    tabs.push({ name: "Admin", state: 2 });
  }
  return (
    <div className="flex flex-col w-full h-full px-10 pt-12 pb-8 overflow-auto whitespace-pre-wrap ">
      <h1 className="mb-8 text-3xl font-bold">{game.name}</h1>

      {game.start ? (
        <>
          <div className="flex flex-row gap-1 p-1 mb-3 rounded-lg">
            {tabs.map((item) => {
              return (
                <a
                  onClick={() => setPage(item.state)}
                  href="#"
                  className={`grow text-center basis-0 ${
                    page === item.state
                      ? "btn-primary text-white"
                      : "text-black dark:bg-gray-800 dark:text-white bg-gray-200"
                  } font-semibold  rounded-md px-3 py-2`}
                  key={item.state}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div
            className={
              "rounded-md mb-2 bg-amber-500/20 text-amber-900 dark:text-amber-400 px-3 py-2 flex flex-row gap-2"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[20px] w-[20px] shrink-0 mt-1 mb-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              />
            </svg>
            {a && (
              <div>
                <h2 className={"text-lg font-bold"}>Announcement</h2>
                <span>
                  {new Date(a.time).toLocaleDateString()}{" "}
                  {new Date(a.time).toLocaleTimeString()}
                </span>
                <p>{a.message}</p>
              </div>
            )}
          </div>
          <div
            className={`${
              page === 0 ? "flex" : "hidden"
            } gap-4 h-full flex-row md:flex-col`}
          >
            <div className={"w-full"}>
              <div className="grid grid-cols-3 gap-3 md:flex xl:grid-cols-2 lg:grid-cols-1 grow md:flex-col">
                <div className="grow dark:bg-red-700/20 bg-red-600/10 flex justify-[normal] flex-col gap-2 dark:text-red-500 text-red-800 rounded-lg py-4 px-5">
                  <div className="flex flex-col justify-center gap-2">
                    <div className="flex flex-row gap-2 mb-1 ml-1">
                      <CrossHairIcon className="w-3 h-3 my-auto" />
                      <span className="my-auto font-bold text-md ">
                        Your Target
                      </span>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Monogram user={targetInfo} />
                      <span className="my-auto text-lg font-bold ">
                        {targetInfo.firstName} {targetInfo.lastName}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-around gap-5 px-10">
                    <div className="flex flex-col text-center">
                      <span className="text-lg font-bold">
                        {targetInfo.kills}
                      </span>
                      <span>eliminations</span>
                    </div>
                    <div className="flex flex-col text-center">
                      <span className="text-lg font-bold">
                        #
                        {leaderboard.findIndex(
                          (e) => e.userID === targetInfo.userID
                        ) + 1}
                      </span>
                      <span>ranking</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full box">
                  <span className="text-lg font-bold">Controls</span>
                  <div className="grid grid-cols-1 gap-2 px-5 mx-auto text-center align-center">
                    {showCode && (
                      <span className="font-mono">{selfInfo.secret}</span>
                    )}
                    <button
                      onClick={() => setShowCode(!showCode)}
                      className="px-3 py-2 text-black border-2 border-black rounded-md hover:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black dark:border-white hover:text-white"
                    >
                      {showCode ? "Hide" : "Display"} elimination code
                    </button>
                    {killSuccess && (
                      <SuccessAlert
                        message={`${targetInfo.firstName} has been successfully eliminated! Good job!`}
                      />
                    )}
                    {killError && <ErrorAlert message={killError}></ErrorAlert>}
                    <TextBox
                      onChange={(e) => {
                        setKillCode(e.target.value);
                      }}
                      placeholder={`Enter ${targetInfo.firstName}'s elimination code`}
                    />
                    <button
                      onClick={() => eliminateTarget()}
                      className="px-3 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
                    >
                      Eliminate {targetInfo.firstName}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto md:w-auto min-w-fit md:ml-0">
              <div className="h-full box md:max-h-72">
                <span className="text-lg font-bold">Leaderboard</span>
                <div
                  className={
                    "flex flex-row justify-between text-md font-semibold"
                  }
                >
                  <span>Rank</span>
                  <span>Eliminations</span>
                </div>

                <div className="flex flex-col h-full gap-2 overflow-auto">
                  {leaderboard.map((el, idx, arr) => (
                    <div className={"flex flex-row gap-3"} key={idx}>
                      <span className="my-auto font-mono font-bold">
                        {String(idx + 1).padStart(3, "0")}
                      </span>
                      <Monogram small className={"my-auto"} user={el} />
                      <span className={"my-auto font-semibold mr-5"}>
                        {el.firstName} {el.lastName}
                      </span>
                      <span className={"my-auto ml-auto"}>{el.kills}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`${page === 1 ? "block" : "hidden"} h-full w-full`}>
            <div className={"box"}>
              <span>Elimination Feed</span>
              <div className="flex flex-col">
                {killFeed.map((item) => {
                  return (
                    <div className="flex flex-row items-center gap-2 px-3 py-2 my-1 border-b-2 last-of-type:border-b-0 border-white/10">
                      {new Date(item.at).toLocaleDateString()}{" "}
                      {new Date(item.at).toLocaleTimeString()}
                      <Monogram
                        small
                        className={"shrink-0 "}
                        user={item.entityUser}
                      />{" "}
                      <span className={"font-semibold"}>
                        {item.entityUser.firstName} {item.entityUser.lastName}
                      </span>{" "}
                      {item.type}ed{" "}
                      <Monogram
                        small
                        className="shrink-0"
                        user={item.targetUser}
                      />{" "}
                      <span className={"font-semibold"}>
                        {item.targetUser.firstName} {item.targetUser.lastName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${page === 2 ? "block" : "hidden"} h-full w-full`}>
            <div className={"box"}>
              <span>Admin Panel</span>
              <div className="flex flex-col gap-4">
                <div className={`max-w-md`}>
                  <span className="text-lg font-bold">Force Kill</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">
                      Enter a user's username
                    </span>
                    <TextBox
                      onChange={(e) => {
                        setForceKillUsername(e.target.value);
                      }}
                      placeholder="Enter a user's username (eg. JL38768)"
                    />
                    <button
                      onClick={() => {
                        fetch(
                          `${API_DOMAIN}/elimination/game/${router.query.game}/user/${forceKillUsername}/eliminate?force=true`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                            body: JSON.stringify({
                              eliminationCode: "Hello",
                            }),
                          }
                        ).then((x) => {
                          if (x.ok) {
                            alert("User has been killed");
                            location.reload();
                          } else alert("User could not be killed");
                        });
                      }}
                      className="px-3 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
                    >
                      Force Kill
                    </button>
                  </div>
                </div>
                <div className={`max-w-md`}>
                  <span className="text-lg font-bold">Revive</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">
                      Enter a user's username
                    </span>
                    <TextBox
                      onChange={(e) => {
                        setForceKillUsername(e.target.value);
                      }}
                      placeholder="Enter a user's username (eg. JL38768)"
                    />
                    <button
                      onClick={() => {
                        fetch(
                          `${API_DOMAIN}/elimination/game/${router.query.game}/user/${forceKillUsername}/resurrect`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        ).then((x) => {
                          if (x.ok) {
                            alert("User has been revived");
                            location.reload();
                          } else alert("User could not be revived");
                        });
                      }}
                      className="px-3 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
                    >
                      Revive
                    </button>
                  </div>
                </div>
                <div className={`max-w-md`}>
                  <span className="text-lg font-bold">Shuffle Targets</span>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">
                      Shuffle targets for all users
                    </span>
                    <button
                      onClick={() => {
                        fetch(
                          `${API_DOMAIN}/elimination/game/${router.query.game}/shuffle`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        ).then((x) => {
                          if (x.ok) {
                            alert("Targets have been shuffled");
                            location.reload();
                          } else alert("Targets could not be shuffled");
                        });
                      }}
                      className="px-3 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
                    >
                      Shuffle
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-bold">
                    Create New Announcement
                  </span>
                  <textarea
                    className="w-full h-32 p-4 rounded-lg resize-none dark:bg-gray-900"
                    id="announcementField"
                  />
                  <button
                    onClick={() => {
                      fetch(
                        `${API_DOMAIN}/game/${router.query.game}/announcements`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem(
                              "token"
                            )}`,
                          },
                          body: JSON.stringify({
                            message: (document.getElementById(
                              "announcementField"
                            ) as HTMLTextAreaElement)!.value,
                          }),
                        }
                      ).then(async () => {
                        const aR = await fetch(
                          `${API_DOMAIN}/game/${router.query.game}/announcements`
                        );
                        const announcements = await aR.json();
                        setA(
                          announcements.sort(
                            (a: any, b: any) => b.time - a.time
                          )[0]
                        );
                        (document.getElementById(
                          "announcementField"
                        ) as HTMLTextAreaElement)!.value = "";
                      });
                    }}
                    className="px-3 py-2 text-white bg-black rounded-md dark:bg-white dark:text-black"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={"flex flex-col h-full w-full"}>
          <div
            className={
              "rounded-md mb-2 bg-amber-500/20 text-amber-900 dark:text-amber-400 px-3 py-2 flex flex-row gap-2"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[20px] w-[20px] shrink-0 mt-1 mb-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              />
            </svg>
            {a && (
              <div>
                <h2 className={"text-lg font-bold"}>Announcement</h2>
                <span>
                  {new Date(a.time).toLocaleDateString()}{" "}
                  {new Date(a.time).toLocaleTimeString()}
                </span>
                <p>{a.message}</p>
              </div>
            )}
          </div>
          <span className="mx-auto my-auto text-4xl link-brand">
            Waiting for this game to start...
          </span>
        </div>
      )}
    </div>
  );
}
