import {useState, useCallback} from "react";
import TextBox from "../components/textbox";


export default function Signup(){
    const errors = [
        'email',
        'first name',
        'last name',
        'password'
    ]
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    // error.valid: whether there is an error or not
    // error.message: the error message
    const [error, setError] = useState({valid: false, message:''});
    
    const submit = useCallback(async ()=>{
        if (password !== password2){
            return setError({
                valid: true,
                message: "Passwords do not match."
            })
        }
        else {
            const props = [email, firstName, lastName, password]
            for (let i=0;i<3;i++){
                if (!props[i]){
                    return setError({
                        valid: true,
                        message: `Please enter your ${errors[i]}.`
                    })
                }
            }
        }
        setError({
            valid: false,
            message: ``
        })
        const response = await fetch('https://api.gunnelimination.com/signup', {
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName
            }),
            method:'post'
        })
    },[email, password, password2, firstName, lastName]);
    return (
        <div className="dark:bg-gray-500 w-full h-full">
        <div className="w-full bg-gradient-to-br bg-brand flex h-full">
            <div className=" bg-white/70 dark:bg-black/70 my-auto grow max-w-sm mx-auto rounded-xl">
            <div className=" flex gap-3 flex-col rounded-xl py-6 px-5 dark:bg-white/10 bg-gray-500/10">
                
                {
                    error.valid && (<div className="rounded-md text-red-500 bg-red-500/20 py-2 px-3">
                        {error.message}
                    </div>)
                }

                <div className="flex flex-row gap-3"><TextBox className="w-full" placeholder="First Name" onInput={(v)=>{setFirstName((v.target as HTMLInputElement).value)}} />
                <TextBox className="w-full"  placeholder="Last Name" onInput={(v)=>{setLastName((v.target as HTMLInputElement).value)}} /></div>
                <TextBox className="w-full" type="email" placeholder="Email" onInput={(v)=>{setEmail((v.target as HTMLInputElement).value)}} />

                <TextBox className="w-full" placeholder="Password" onInput={(v)=>{setPassword((v.target as HTMLInputElement).value)}} type="password"/>

                <TextBox className="w-full" placeholder="Confirm Password" onInput={(v)=>{setPassword2((v.target as HTMLInputElement).value)}} type="password"/>
                <button onClick={submit} className="btn-primary mt-1">Sign Up</button>
                <span className="dark:text-white/60 text-black/60 italic text-sm">Already have an account?  <a className="link-brand" href="/login">Login.</a></span>
            </div>
            </div>
        </div>
        </div>
    )
}
