import logo from "../assets/logo.svg"
import { Link, NavigateFunction, NavLink, useNavigate } from "react-router-dom"

interface NavigationLink {
    to: string
    text: string
}

interface AuthBtn {
    to: string
    text: string
    className: string
}

function MainNavigation(): JSX.Element {
    const navigate: NavigateFunction = useNavigate()

    const navLinks: NavigationLink[] = [
        {
            to: "/individual",
            text: "Individual",
        },
        {
            to: "/business",
            text: "Business",
        },
        {
            to: "/pricing",
            text: "Pricing",
        },
        {
            to: "/set-your-payroll",
            text: "Set your payroll",
        },
    ]

    const authBtns: AuthBtn[] = [
        {
            to: "/log-in",
            text: "log in",
            className: "text-color-green bg-color-white mr-[2.4rem]",
        },
        {
            to: "/register",
            text: "Register",
            className: "text-color-white bg-color-green",
        },
    ]

    const navigateToHome = (): void => {
        navigate("/")
    }

    return (
        <header className={"flex items-center h-[8rem] px-[19rem] w-full"}>
            <img src={logo} alt={"logo"} onClick={navigateToHome} className={"cursor-pointer"} />
            <nav className={"mx-auto"}>
                <ul className={"flex items-center "}>
                    {navLinks.map((link: NavigationLink, i: number) => (
                        <li key={i}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }: { isActive: boolean }): string =>
                                    isActive ? "mx-[2.4rem]" : "text-color-black-1 mx-[2.4rem]"
                                }
                            >
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                {authBtns.map((btn: AuthBtn, i: number) => (
                    <Link
                        to={btn.to}
                        key={i}
                        className={`capitalize border border-color-green rounded-[2.4rem] py-[1rem] px-[3.2rem] ${btn.className}`}
                    >
                        {btn.text}
                    </Link>
                ))}
            </div>
        </header>
    )
}

export default MainNavigation
