import { useRouter } from "next/router";
import { useState, useCallback, useContext, useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";
import SuccessAlert from "../components/SuccessAlert";
import TextBox from "../components/textbox";
import { UserContext } from "../helpers/usercontext";

export default function Signup() {
  const router = useRouter()
  const user = useContext(UserContext);
  const errors = ["first name", "last name", "email", "password"];
  const [email, setEmail] = useState("");
  const [finalEmail, setFinalEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // error.valid: whether there is an error or not
  // error.message: the error message
  useEffect(()=>{
    if (user){
      router.push('/app')
    }
  }, [user])
  const [error, setError] = useState({ valid: false, message: "" });
  const [emailSent, setEmailSent] = useState(false);
  const submit = useCallback(async () => {
    if (password !== password2) {
      return setError({
        valid: true,
        message: "Passwords do not match.",
      });
    } else {
      const props = [firstName, lastName, email, password];
      for (let i = 0; i < 4; i++) {
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
    const response = await fetch("https://api.gunnelimination.com/signup", {
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        createdBy: "Standalone",
        redirectURL: "https://gunnelimination.com/app"
      }),
      headers: new Headers({'content-type': 'application/json'}),
      method: "post",
    });
    const responseText = await response.text()
    console.log(response.status, responseText)
    if (response.status === 200){
      setFinalEmail(email);
      for (const setter of [setEmail, setFirstName, setLastName, setPassword, setPassword2]){
        setter("")
      }
      setEmailSent(true);
      localStorage.setItem('token', responseText)
    }
    else if (response.status === 409 && (responseText === "Email already exists in unverifiedUsers")){
      setError({
        valid:true,
        message: "You have already signed up. Finish creating your account by verifying your email!"
      })
    }
    
  }, [email, password, password2, firstName, lastName]);
  return (
    <div className="dark:bg-gray-500 w-full h-full">
      <div className="w-full bg-gradient-to-br bg-brand flex px-5 h-full">
        <div className=" bg-white/70 dark:bg-black/70 my-auto grow md:max-w-sm max-w-xs mx-auto rounded-xl">
          <div className=" flex gap-3 flex-col rounded-xl py-6 px-5 dark:bg-white/10 bg-gray-500/10">
            {error.valid && <ErrorAlert message={error.message} />}
            {emailSent && <div className="rounded-md flex flex-row text-green-500 bg-green-500/20 py-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="my-auto mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>
            A verification email has been sent to {finalEmail}.
        </div>}
            <div className="flex flex-row gap-3">
              <TextBox
                className="w-full"
                placeholder="First Name"
                onInput={(v) => {
                  setFirstName((v.target as HTMLInputElement).value);
                }}
              />
              <TextBox
                className="w-full"
                placeholder="Last Name"
                onInput={(v) => {
                  setLastName((v.target as HTMLInputElement).value);
                }}
              />
            </div>
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

            <TextBox
              className="w-full"
              placeholder="Confirm Password"
              onInput={(v) => {
                setPassword2((v.target as HTMLInputElement).value);
              }}
              type="password"
            />
            <button onClick={submit} className="btn-primary mt-1">
              Sign Up
            </button>
            <span className="dark:text-white/60 text-black/60 italic text-sm">
              Already have an account?{" "}
              <a className="link-brand" href="/login">
                Login.
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
