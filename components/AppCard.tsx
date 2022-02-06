import {ReactNode} from 'react';


type AppCardProps = {
    name: string, href: string, icon: string, img?: string,
    children: ReactNode
};
export default function AppCard(props: AppCardProps) {
    const {name, href, icon, img, children} = props;

    return (
        <a target="_blank" rel="noopener noreferrer" href={href} className="basis-[20rem]">
            <div className="bg-white text-black dark:bg-zinc-800 dark:text-white p-4 h-full rounded-lg text-left shadow-lg hover:shadow-xl transition transition-shadow duration-150 ease-in-out">
                <span className="flex gap-3 items-center mb-3">
                    <img src={icon} alt={name} className="rounded-full h-8" />
                    <h3 className="text-3xl font-bold">{name}</h3>
                </span>
                {img && <img src={img} alt={name} className="rounded-md outline outline-1 outline-gray-300/50 mb-3" />}
                <p>{children}</p>
            </div>
        </a>
    )
}
