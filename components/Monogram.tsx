import { useEffect, useState } from "react"

export default function Monogram(props:{user:Record<string,any>, className?:string|undefined, small?:boolean,}){
    const [n, setN] = useState(0);
    const colors = ['bg-lime-700', 'bg-rose-700', 'bg-sky-700', 'bg-amber-700', 'bg-purple-700', 'bg-emerald-700']
    useEffect(()=>{
        setN(Number(props.user.firstName?.charCodeAt(0) || (props.user.lastName?.charCodeAt(0) || 0)) % colors.length)
    },[props.user.firstName, props.user.lastName])

    return (
        <div className={`rounded-full justify-center text-center relative  shrink-0 flex ${colors[n]} text-white font-semibold text-xs ${props.small?'w-6 h-6 grow':'w-7 h-7'}`+props.className}>
            <span className="my-auto">{(props.user.firstName||[])[0]}{(props.user.lastName||[])[0]}</span>
            <span className={`absolute ${props.small?'h-2 w-2 bottom-0 right-0':'h-3 w-3 -bottom-0.5 -right-0.5'} rounded-full  ${props.user.eliminated?'bg-red-500':'bg-green-500'}`}/>
        </div>
    )

}
