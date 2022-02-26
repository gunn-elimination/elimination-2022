import { ReactNode } from "react";
import Link from "next/link";

type AppCardProps = {
  name: string;
  href: string;
  icon: string;
  img?: string;
  darkImg?: string;
  children: ReactNode;
};
export default function AppCard(props: AppCardProps) {
  const { name, href, icon, img, darkImg, children } = props;

  return (
    <Link href={href}>
      <div className="h-full hoverCard p-4 text-left text-black transition-shadow duration-150 ease-in-out bg-white rounded-lg shadow-lg dark:bg-zinc-800 dark:text-white hover:shadow-xl basis-[20rem] flex flex-col gap-2">
        <span className="flex items-center gap-3 mb-3">
          <img src={icon} alt={name} className="h-12 rounded-none" />
          <h3 className="text-3xl font-semibold">{name}</h3>
        </span>
        {img && (
          <img
            src={img}
            alt={name}
            className={`my-auto rounded-md outline outline-1 outline-gray-300/50 ${darkImg && `dark:hidden`} `}
          />
        )}
        {darkImg && (
          <img
            src={darkImg}
            alt={name}
            className="hidden mb-3 rounded-md outline outline-1 outline-gray-300/50 dark:block"
          />
        )}
        <p className={`text-center my-auto`}>{children}</p>
        <button className="mt-2 mb-0 btn-primary">Play with {name}</button>
      </div>
    </Link>
  );
}
