import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root.tsx"
import HomePage from "./pages/HomePage.tsx"
import Individual from "./pages/Individual.tsx"
import Business from "./pages/Business.tsx"
import Pricing from "./pages/Pricing.tsx"
import SetYourPayroll from "./pages/SetYourPayroll.tsx"
import Login from "./pages/Login.tsx"
import Dashboard from "./pages/Dashboard.tsx"
import DahboardHome from "./pages/dashboard-pages/DahboardHome.tsx"

function App(): JSX.Element {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/individual",
                    element: <Individual />,
                },
                {
                    path: "/business",
                    element: <Business />,
                },
                {
                    path: "/pricing",
                    element: <Pricing />,
                },
                {
                    path: "/set-your-payroll",
                    element: <SetYourPayroll />,
                },
            ],
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "dashboard",
            element: <Dashboard />,
            children: [
                {
                    path: "",
                    element: <DahboardHome />,
                },
                {
                    path: "wallet",
                    element: "",
                },
                {
                    path: "employee-management",
                },
                {
                    path: "payroll",
                },
                {
                    path: "compliance",
                },
                {
                    path: "quickloan",
                },
                {
                    path: "book-keeping",
                },
                {
                    path: "support",
                },
                {
                    path: "settings",
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
