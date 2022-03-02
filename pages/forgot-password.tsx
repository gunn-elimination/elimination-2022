import ErrorAlert from "../components/ErrorAlert";
import TextBox from "../components/textbox";
import {useCallback, useState} from "react";

export default function ForgotPassword(){
    const [email, setEmail] = useState("");
    const [finalEmail, setFinalEmail] = useState("");
    const [error, setError] = useState({ valid: false, message: "" });
    const [emailSent, setEmailSent] = useState(false);
    const submit = useCallback(async () => {
        if (!email) {
            return setError({
                valid: true,
                message: "Please enter your email.",
            });
        }
        setError({
            valid: false,
            message: ``,
        });
        const response = await fetch("https://api.gunnelimination.com/forgot-password", {
            body: JSON.stringify({
                email,
                redirectURL: "https://gunnelimination.com/new-password"
            }),
            headers: new Headers({'content-type': 'application/json'}),
            method: "post",
        });
        const responseText = await response.text()
        if (response.status === 200){
            setFinalEmail(email);
            for (const setter of [setEmail]){
                setter("")
            }
            setEmailSent(true);
        }
        else {
            setError({
                valid: true,
                message: responseText
            })
        }

    }, [email]);
    return (
        <div className="dark:bg-gray-500 w-full h-full">
            <div className="w-full bg-gradient-to-br bg-brand flex px-5 h-full">
                <div className=" bg-white/70 dark:bg-black/70 my-auto grow md:max-w-sm max-w-xs mx-auto rounded-xl">
                    <div className=" flex gap-3 flex-col rounded-xl py-6 px-5 dark:bg-white/10 bg-gray-500/10">
                        {error.valid && <ErrorAlert message={error.message} />}
                        {emailSent && <div className="rounded-md flex flex-row text-green-500 bg-green-500/20 py-2 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="my-auto grow shrink-0 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            A password reset email has been sent to {finalEmail}.
                        </div>}

                        <TextBox
                            className="w-full"
                            type="email"
                            placeholder="PAUSD Email"
                            onInput={(v) => {
                                setEmail((v.target as HTMLInputElement).value);
                            }}
                        />


                        <button onClick={submit} className="btn-primary mt-1">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
