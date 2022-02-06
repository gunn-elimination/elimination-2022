import { Transition } from "@headlessui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`w-full h-full brick`}>
      <Head>
        <title>Gunn Elimination 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24 text-center">
        <Transition
          show={animate}
          enter="ease-out duration-500 delay-300"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 scale-0"
        >
          <h1 className="font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-red-500 animate-gradient-slow">
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
          <p className="mb-8 text-lg">
            Welcome to Gunn Elimination, 2022. It's kill or be killed.
          </p>
        </Transition>
        <Transition
          show={animate}
          enter="ease-out duration-[2000ms] delay-[1500ms]"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="mb-4">Play on your Gunn Application of choice:</p>
        </Transition>
        <section className="flex flex-wrap justify-center gap-8 pointer-events-none group">
          <Transition
            show={animate}
            enter="ease-out duration-700 delay-[1800ms]"
            enterFrom="opacity-0 scale-0 origin-top-left"
            enterTo="opacity-100"
            leave="ease-in duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
            className={`hoverCard`}
          >
            <AppCard
              name="Disadus"
              href="https://disadus.app"
              icon="/apps/disadus.png"
              img="/apps/disadus-dark.png"
            >
              Have you heard of Disadus?
            </AppCard>
          </Transition>
          <Transition
            show={animate}
            enter="ease-out duration-700 delay-[2500ms]"
            enterFrom="opacity-0 scale-0 origin-top"
            enterTo="opacity-100"
            leave="ease-in duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
            className={`hoverCard`}
          >
            <AppCard
              name="WATT"
              href="https://gunn.app"
              icon="/apps/watt.png"
              img="/apps/disadus-dark.png"
            >
              WATT is pretty cool. Use it!
            </AppCard>
          </Transition>
          <Transition
            show={animate}
            enter="ease-out duration-700 delay-[3200ms]"
            enterFrom="opacity-0 scale-0  origin-top-right"
            enterTo="opacity-100"
            leave="ease-in duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
            className={`hoverCard`}
          >
            <AppCard
              name="Gunn.one"
              href="https://gunn.one"
              icon="/apps/gunn-one.svg"
              img="/apps/disadus-dark.png"
            >
              Gunn.one. It's got one in the name!
            </AppCard>
          </Transition>
        </section>
        <Transition
          show={animate}
          enter="ease-out duration-1000 delay-[4000ms]"
          enterFrom="opacity-0 scale-0  origin-top"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 scale-0"
          className={`basis-[20rem]`}
        >
          <p className="my-4">Don't like your choices? Play standalone.</p>
        </Transition>

        <div className="flex items-center justify-center gap-4 mb-16 text-xl font-bold">
          <Transition
            show={animate}
            enter="ease-out duration-500 delay-[5000ms]"
            enterFrom="opacity-0 scale-0 -translate-y-full"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
          >
            <a>Log in</a>
          </Transition>

          <Transition
            show={animate}
            enter="ease-out duration-500 delay-[6000ms]"
            enterFrom="opacity-0 scale-0 -translate-y-full"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
          >
            <button className="px-4 py-2 font-bold text-white transition transition-shadow duration-100 ease-in-out rounded-md shadow-lg bg-gradient-to-br from-red-500 via-red-500 to-pink-600 shadow-red-700/40 hover:shadow-xl hover:shadow-red-700/40">
              Sign up
            </button>
          </Transition>
        </div>
      </main>
    </div>
  );
}
