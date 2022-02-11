import {useState} from "react";
import TextBox from "../components/textbox";


export default function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    async function submit(){
        // todo: fix signup URL
        const response = await fetch('https://api.gunnelimination.com/signup', {
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName
            }),
            method:'post'
        })
    }
    return (
        <div className="w-full flex h-full">
            <div className="my-auto grow max-w-lg mx-auto flex gap-3 flex-col max-w- rounded-xl py-4 px-5 bg-white/10">
                <h1 className="mb-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-red-500 text-xl font-medium">Sign Up</h1>
                <div className="flex flex-row gap-3"><TextBox className="w-full" placeholder="First Name" onInput={(v)=>{setFirstName(v.target.value)}} />
                <TextBox className="w-full"  placeholder="Last Name" onInput={(v)=>{setLastName(v.target.value)}} /></div>
                <TextBox className="w-full" type="email" placeholder="Email" onInput={(v)=>{setEmail(v.target.value)}} />
                <TextBox className="w-full" placeholder="Password" onInput={(v)=>{setPassword(v.target.value)}} type="password"/>
                <TextBox className="w-full" placeholder="Confirm Password" onInput={(v)=>{setPassword2(v.target.value)}} type="password"/>
                <button onClick={submit} className="btn-primary">Signup</button>
            </div>
        </div>
    )
}
