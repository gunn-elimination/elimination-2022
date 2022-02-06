import Head from 'next/head'
import AppCard from '../components/AppCard';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Gunn Elimination 2022</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="text-center pt-24">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-500 to-pink-600">
                    Elimination
                </h1>
                <p className="text-lg mb-4">Welcome to Gunn Elimination, 2022. It's kill or be killed.</p>

                <div className="flex gap-4 items-center justify-center mb-16 text-xl font-bold">
                    <button className="bg-gradient-to-br from-red-500 via-red-500 to-pink-600 text-white rounded-md font-bold py-2 px-4 shadow-lg shadow-red-700/40 hover:shadow-xl hover:shadow-red-700/40 transition transition-shadow duration-100 ease-in-out">
                        Sign up
                    </button>
                    <a>Log in</a>
                </div>

                <p className="mb-4">Alternatively, play on your schedule app of choice:</p>
                <section className="flex flex-wrap gap-8 justify-center">
                    <AppCard name="WATT" href="https://gunn.app" icon="/apps/watt.png" img="/apps/disadus-dark.png">
                        WATT is pretty cool. Use it!
                    </AppCard>
                    <AppCard name="Gunn.one" href="https://gunn.one" icon="/apps/gunn-one.svg" img="/apps/disadus-dark.png">
                        Gunn.one. It's got one in the name!
                    </AppCard>
                    <AppCard name="Disadus" href="https://disadus.app" icon="/apps/disadus.png" img="/apps/disadus-dark.png">
                        Have you heard of Disadus?
                    </AppCard>
                </section>
            </main>
        </div>
    )
}
