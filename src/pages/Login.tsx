import LoginForm from "../components/LoginForm.tsx"
import logo from "../assets/logo.svg"

function Login(): JSX.Element {
    return (
        <section className={"flex w-full h-screen"}>
            <div className={"w-1/2 bg-login-img bg-no-repeat bg-cover bg-center"}></div>
            <div className={"w-1/2 flex items-center justify-center px-[10rem] flex-col"}>
                <img src={logo} alt={"logo"} className={"mb-[5rem]"} />
                <LoginForm />
            </div>
        </section>
    )
}

export default Login
