import { useRouter } from "next/router";
import { useState, useCallback, useContext, useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import TextBox from "../components/textbox";
import { UserContext } from "../helpers/usercontext";

export default function NewPassword() {
    const errors = ['new password']
    const router  = useRouter()
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [changed, setChanged] = useState(true)
    // error.valid: whether there is an error or not
    // error.message: the error message
    const [error, setError] = useState({ valid: false, message: "" });
    const submit = useCallback(async () => {
        if (password !== password2) {
            return setError({
                valid: true,
                message: "Passwords do not match.",
            });
        } else {
            const props = [password];
            for (let i = 0; i < 1; i++) {
                if (!props[i]) {
                    return setError({
                        valid: true,
                        message: `Please enter your ${errors[i]}.`,
                    });
                }
            }
        }
        setError({
            valid: false,
            message: ``,
        });
        const response = await fetch("https://api.gunnelimination.com/set-password", {
            body: JSON.stringify({
                password,
                token: router.query.token
            }),
            headers: new Headers({'content-type': 'application/json'}),
            method: "post",
        });
        const responseText = await response.text()
        console.log(response.status, responseText)
        if (response.status === 200){
            for (const setter of [setPassword, setPassword2]){
                setter("")
            }
            setChanged(true)
        }
        else {

            setError({
                valid: true,
                message: responseText
            })
        }

    }, [password, password2]);
    return (
        <div className="dark:bg-gray-500 w-full h-full">
            <div className="w-full bg-gradient-to-br bg-brand flex px-5 h-full">
                <div className=" bg-white/70 dark:bg-black/70 my-auto grow md:max-w-sm max-w-xs mx-auto rounded-xl">
                    <div className=" flex gap-3 flex-col rounded-xl py-6 px-5 dark:bg-white/10 bg-gray-500/10">
                        {error.valid && <ErrorAlert message={error.message} />}
                        {changed && <div className="rounded-md flex flex-row text-green-500 bg-green-500/20 py-2 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="my-auto grow shrink-0 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Your password has been changed!
                        </div>}

                        <TextBox
                            className="w-full"
                            placeholder="New Password"
                            onInput={(v) => {
                                setPassword((v.target as HTMLInputElement).value);
                            }}
                            type="password"
                        />
                        {password}
                        <TextBox
                            className="w-full"
                            placeholder="Confirm New Password"
                            onInput={(v) => {
                                setPassword2((v.target as HTMLInputElement).value);
                            }}
                            type="password"
                        />
                        <button onClick={submit} className="btn-primary mt-1">
                            Set Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
