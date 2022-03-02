import { useRouter } from "next/router";
import { useState, useCallback, useContext, useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";
import TextBox from "../components/textbox";
import { UserContext } from "../helpers/usercontext";

export default function Login() {
  const router = useRouter()
  const user = useContext(UserContext);
  const errors = ["email", "password"];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // error.valid: whether there is an error or not
  // error.message: the error message
  const [error, setError] = useState({ valid: false, message: "" });

  const submit = useCallback(async () => {
    const props = [email, password];
    for (let i = 0; i < 2; i++) {
      if (!props[i]) {
        return setError({
          valid: true,
          message: `Please enter your ${errors[i]}.`,
        });
      }
    }
    setError({
      valid: false,
      message: ``,
    });
    const response = await fetch("https://api.gunnelimination.com/login", {
      body: JSON.stringify({
        email,
        password,
      }),
      headers: new Headers({'content-type': 'application/json'}),
      method: "post",
    });
    const responseText = await response.text();
    if (responseText === "User not found"){
      setError({
        valid: true,
        message: "It looks like you do not have an account. Have you verified your email?"
      })
    }
    else if (response.status === 200){
      localStorage.setItem('token', responseText)
      router.push('/app')
    }
  }, [email, password]);
  useEffect(()=>{
    if (user){
      router.push('/app')
    }
  }, [user])
  return (
    <div className="dark:bg-gray-500 w-full h-full">
    <div className="w-full bg-gradient-to-br bg-brand flex px-5 h-full">
      <div className=" bg-white/70 dark:bg-black/70 my-auto grow max-w-sm mx-auto rounded-xl">
        <div className=" flex gap-3 flex-col rounded-xl  py-6 px-5 dark:bg-white/10 bg-gray-500/10">
          {error.valid && <ErrorAlert message={error.message}/>}

          <TextBox
            className="w-full"
            type="email"
            placeholder="Email"
            onInput={(v) => {
              setEmail((v.target as HTMLInputElement).value);
            }}
          />

          <TextBox
            className="w-full"
            placeholder="Password"
            onInput={(v) => {
              setPassword((v.target as HTMLInputElement).value);
            }}
            type="password"
          />

          <button onClick={submit} className="btn-primary mt-1">
            Log In
          </button>
         <div>
           <p className="dark:text-white/60 text-black/60 italic text-sm">Don't have an account? <a className="link-brand" href="/signup">Sign up.</a></p>
           <p className="dark:text-white/60 text-black/60 italic text-sm"><a className="link-brand" href="/forgot-password">Forgot password?</a></p>

         </div>
        </div>
      </div>
    </div>

    </div>
  );
}
