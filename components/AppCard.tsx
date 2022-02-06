import {ReactNode} from 'react';


type AppCardProps = {
    name: string, href: string, icon: string,
    children: ReactNode
};
export default function AppCard(props: AppCardProps) {
    const {name, href, icon, children} = props;

    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className="basis-[20rem]">
            <div className="bg-white text-black dark:bg-zinc-800 dark:text-white p-4 rounded-lg text-left shadow-lg hover:shadow-xl transition transition-shadow duration-150 ease-in-out">
                <span className="flex gap-3 items-center mb-4">
                    <img src={icon} alt={name} className="rounded-full h-8" />
                    <h3 className="text-3xl font-bold">{name}</h3>
                </span>
                <p>{children}</p>
            </div>
        </a>
    )
}
