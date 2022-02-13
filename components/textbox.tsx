import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function TextBox(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return <input {...props} className={`px-3 text-sm py-2 caret-rose-600 focus:outline-none rounded-md dark:bg-white/10 dark:placeholder:text-white/40 placeholder:text-gray-800/40 bg-white/40  ${props.className}`} />
}
