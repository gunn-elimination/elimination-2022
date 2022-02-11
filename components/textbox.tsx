import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function TextBox(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return <input {...props} className={`px-2 py-1 focus:outline-none rounded-md bg-white/20 ${props.className}`} />
}
