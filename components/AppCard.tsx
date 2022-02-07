import { ReactNode } from 'react';
import Link from 'next/link';


type AppCardProps = {
    name: string, href: string,
    icon: string, img?: string,
    children: ReactNode
};
export default function AppCard(props: AppCardProps) {
    const { name, href, icon, img, children } = props;

    return (
        <Link href={href}>
            <div className="h-full p-4 text-left text-black transition-shadow duration-150 ease-in-out bg-white rounded-lg shadow-lg dark:bg-zinc-800 dark:text-white hover:shadow-xl basis-[20rem]">
                <span className="flex items-center gap-3 mb-3">
                    <img src={icon} alt={name} className="h-8 rounded-full" />
                    <h3 className="text-3xl font-bold">{name}</h3>
                </span>
                {img && (
                    <img
                        src={img}
                        alt={name}
                        className="mb-3 rounded-md outline outline-1 outline-gray-300/50"
                    />
                )}
                <p>{children}</p>
            </div>
        </Link>
    );
}
