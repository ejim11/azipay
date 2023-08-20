import InputComponent from "./InputComponent.tsx"
import { useState } from "react"
import { useNavigate } from "react-router"
import { NavigateFunction } from "react-router-dom"

function LoginForm(): JSX.Element {
    const navigate: NavigateFunction = useNavigate()

    const [emailVal, setEmailVal] = useState<string>("")
    const [passwordval, setPasswordval] = useState<string>("")

    const loginFormHandler = (): void => {
        console.log(emailVal, passwordval)
        navigate("/dashboard")
    }

    return (
        <form onSubmit={loginFormHandler} className={"w-full"}>
            <InputComponent
                inputName={"loginEmail"}
                placeholder={"Email"}
                inputType={"email"}
                value={emailVal}
                setValue={setEmailVal}
            />
            <InputComponent
                inputName={"loginPassword"}
                placeholder={"Password"}
                inputType={"password"}
                value={passwordval}
                setValue={setPasswordval}
            />
            <button
                type={"submit"}
                className={
                    "w-full py-[1.3rem] text-center text-color-white bg-color-green-1 rounded-[2.4rem] mt-[5rem]"
                }
            >
                Login
            </button>
        </form>
    )
}

export default LoginForm
