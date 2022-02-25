import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";
import AppCard from "../components/AppCard";
import { UserContext } from "../helpers/usercontext";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const user = useContext(UserContext);
  const items = useRef([] as any[]);
  useLayoutEffect(() => {
    const cards = [
      <AppCard
        name="Gunn.One"
        href="https://gunn.one/app/elimination"
        icon="/apps/gunn-one.png"
        img="/apps/6FDDF687-BD89-4D99-9CF6-2D6272111977.jpeg"
        key={"gunn1"}
      >
        Everything at Gunn, all in One! No Schoology login required.
      </AppCard>,
      <AppCard
        name="Disadus"
        href="https://disadus.app/invites/gunn"
        icon="/apps/disadus.png"
        img="/apps/disadus-light.png"
        darkImg="/apps/disadus-dark.png"
        key={"disadus"}
      >
        Have you heard of Disadus? We have cute frogs!
      </AppCard>,
    ];
    // shuffle the cards
    const shuffled = Math.random() < 0.5 ? cards : cards.reverse();
    items.current = shuffled;
  }, []);
  // Is there a better way to do this?
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full h-full px-5 overflow-auto brick">
      <main className="py-24 text-center">
        <Transition
          show={animate}
          enter="ease-out duration-500 delay-300"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 scale-0"
        >
          <h1 className="mb-1 font-bold text-transparent md:text-5xl text-9xl bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-red-500 animate-gradient-slow">
            Elimination
          </h1>
        </Transition>
        <Transition
          show={animate}
          enter="ease-out duration-[1500ms] delay-[800ms]"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="mb-6 text-lg md:text-base">
            Welcome to Gunn Elimination, 2022. Eliminate others before they eliminate you!
          </p>
        </Transition>





        <section className="flex flex-wrap justify-center pointer-events-none group">
          {items.current}
        </section>
        <div className="flex justify-center ">
          <div className="h-full mt-3 max-w-sm p-4 text-left text-black transition-shadow duration-150 ease-in-out bg-white rounded-lg shadow-lg dark:bg-zinc-800 dark:text-white hover:shadow-xl flex flex-col gap-2">
            <span className="text-xl font-semibold">Standalone</span>
            <p className="text-sm">Don't want the conveniences of a schedule app? Play using the standalone application!</p>
            <a className="btn-primary-outline btn-sm mt-2">Play with Standalone</a>
          </div>
        </div>



      </main>
    </div>
  );
}
