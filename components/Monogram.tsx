import { useEffect, useState } from "react"

export default function Monogram(props:{firstName?:string, lastName?:string, className?:string|undefined}){   
    const [n, setN] = useState(0);
    const colors = ['bg-lime-700', 'bg-rose-700', 'bg-sky-700', 'bg-amber-700', 'bg-purple-700', 'bg-emerald-700']
    useEffect(()=>{
        setN(Number(props.firstName?.charCodeAt(0) || 0 + (props.lastName?.charCodeAt(0) || 0)) % colors.length)
    },[props.firstName, props.lastName])

    return (
        <div className={`rounded-full justify-center text-center flex w-7 h-7 ${colors[n]} text-white font-semibold text-xs `+props.className}>
            <span className="my-auto">{(props.firstName||[])[0]}{(props.lastName||[])[0]}</span>
        </div>
    )

}