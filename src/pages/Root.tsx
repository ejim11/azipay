import MainNavigation from "../components/MainNavigation.tsx"
import { Outlet } from "react-router-dom"

function Root(): JSX.Element {
    return (
        <div className={"relative"}>
            <MainNavigation />
            <main className={"absolute top-0 left-0 right-0 -z-20 min-h-screen w-full"}>
                <Outlet />
            </main>
        </div>
    )
}

export default Root
