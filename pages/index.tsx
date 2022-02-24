import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Transition } from '@headlessui/react';
import AppCard from '../components/AppCard';
import { UserContext } from '../helpers/usercontext';


export default function Home() {
    const [animate, setAnimate] = useState(false);
    const user = useContext(UserContext);
    // Is there a better way to do this?
    useEffect(() => {
        setAnimate(true);
    }, []);


    return (
        <div className="w-full h-full px-5 brick overflow-auto">


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
                    <h1 className="font-bold text-transparent mb-1 md:text-5xl text-9xl bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-red-500 animate-gradient-slow">
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
                    <p className="mb-6 md:text-base text-lg">
                        Welcome to Gunn Elimination, 2022. It's kill or be killed.</p>
                </Transition>

                {user ? (<div className="flex items-center justify-center gap-4 mb-16 text-xl font-bold">
                <Transition
            show={animate}
            enter="ease-out duration-500 delay-[1200ms]"
            enterFrom="opacity-0 scale-0 -translate-y-full"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
        >
            <a href="/app" className="btn-primary">
                Play
            </a>
        </Transition>
                    </div>) : <div className="flex items-center justify-center gap-4 mb-16 text-xl font-bold">
        <Transition
            show={animate}
            enter="ease-out duration-500 delay-[1200ms]"
            enterFrom="opacity-0 scale-0 -translate-y-full"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
        >
            <a href="/signup" className="btn-primary">
                Sign up
            </a>
        </Transition>

        <Transition
            show={animate}
            enter="ease-out duration-500 delay-[1200ms]"
            enterFrom="opacity-0 scale-0 -translate-y-full"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 scale-0"
        >
            <a href="/login">Log in</a>
        </Transition>
    </div>
}

                    <p className="mb-4">Alternatively, play on your Gunn Application of choice:</p>

                <section className="flex flex-wrap justify-center pointer-events-none group">
                        <AppCard
                            name="Disadus"
                            href="https://disadus.app"
                            icon="/apps/disadus.png"
                            img="/apps/disadus-dark.png"
                        >
                            Have you heard of Disadus?
                        </AppCard>


                    {false && <AppCard
                            name="WATT"
                            href="https://gunn.app"
                            icon="/apps/watt.png"
                            img="/apps/disadus-dark.png"
                        >
                            WATT is pretty cool. Use it!
                        </AppCard>}


                        <AppCard
                            name="Gunn.One"
                            href="https://gunn.one/app/elimination"
                            icon="/apps/gunn-one.png"
                            img="/apps/disadus-dark.png"
                        >
                            Everything at Gunn, all in One!
                        </AppCard>

                </section>
            </main >
        </div >
    );
}
