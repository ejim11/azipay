import logoWhiteImg from "../../assets/logo-white.svg"
import { Link, useLocation } from "react-router-dom"
import { MdAccountBalanceWallet, MdDashboard, MdKeyboardArrowDown } from "react-icons/md"
import { FaUserPlus } from "react-icons/fa"
import { IoDocumentText, IoSettings } from "react-icons/io5"
import { HiClipboardDocumentCheck } from "react-icons/hi2"
import { RiHandCoinFill } from "react-icons/ri"
import { GiOpenBook } from "react-icons/gi"
import { BsFillTelephoneFill } from "react-icons/bs"

interface DashboardNavLink {
    title: string
    path: string
    icon: JSX.Element | string
    subPaths: boolean
}

function DashboardNavigation(): JSX.Element {
    const currentRoute = useLocation()

    const navLinkIconClassName: string = "text-currentColor w-[2rem] h-[2rem] mr-[1.2rem]"

    const dashboardNavLinks: DashboardNavLink[] = [
        {
            title: "dashboard",
            path: "/dashboard",
            icon: <MdDashboard className={navLinkIconClassName} />,
            subPaths: false,
        },
        {
            title: "wallet",
            path: "/dashboard/wallet",
            icon: <MdAccountBalanceWallet className={navLinkIconClassName} />,
            subPaths: false,
        },
        {
            title: "employee management",
            path: "/dashboard/employee-management",
            icon: <FaUserPlus className={navLinkIconClassName} />,
            subPaths: true,
        },
        {
            title: "payroll",
            path: "/dashboard/payroll",
            icon: <IoDocumentText className={navLinkIconClassName} />,
            subPaths: true,
        },
        {
            title: "compliance",
            path: "/dashboard/compliance",
            icon: <HiClipboardDocumentCheck className={navLinkIconClassName} />,
            subPaths: true,
        },
        {
            title: "quickloan",
            path: "/dashboard/quickloan",
            icon: <RiHandCoinFill className={navLinkIconClassName} />,
            subPaths: true,
        },
        {
            title: "book keeping",
            path: "/dashboard/book-keeping",
            icon: <GiOpenBook className={navLinkIconClassName} />,
            subPaths: true,
        },
        {
            title: "support",
            path: "/dashboard/support",
            icon: <BsFillTelephoneFill className={navLinkIconClassName} />,
            subPaths: false,
        },
        {
            title: "settings",
            path: "/dashboard/settings",
            icon: <IoSettings className={navLinkIconClassName} />,
            subPaths: true,
        },
    ]

    return (
        <div className={"w-[27.5rem] h-screen"}>
            <div className={"bg-color-green-1 h-[10rem] flex items-center justify-center"}>
                <img src={logoWhiteImg} alt={"logo"} />
            </div>
            <div className={"mt-[2rem]"}>
                <nav>
                    <ul className={"flex flex-col"}>
                        {dashboardNavLinks.map((link: DashboardNavLink, i: number) => (
                            <li key={i}>
                                <Link
                                    to={link.path}
                                    className={` ${
                                        currentRoute.pathname === link.path
                                            ? "text-[#11453B] bg-[rgba(240,247,235,0.50)] border-color-green-1 "
                                            : "text-[#515251] bg-color-white border-color-white"
                                    } border-l-4 flex items-center py-[1.5rem] px-[2rem] capitalize font-medium`}
                                >
                                    {link.icon}
                                    <span>{link.title}</span>
                                    {link.subPaths && (
                                        <MdKeyboardArrowDown
                                            className={"w-[1.8rem] h-[1.8rem] ml-auto"}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default DashboardNavigation
