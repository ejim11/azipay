import DashboardNavigation from "../components/Dashboard/DashboardNavigation.tsx"
import { Outlet } from "react-router-dom"
import companyLogoImg from "../assets/Company Logo.svg"
import { BsFillBellFill } from "react-icons/bs"
import profileImg from "../assets/Ellipse 12.svg"
import { MdKeyboardArrowRight } from "react-icons/md"

function Dashboard(): JSX.Element {
    return (
        <div className={"flex"}>
            <DashboardNavigation />
            <div className={"flex-1"}>
                <div className={"h-[8rem] px-[3rem] flex items-center"}>
                    <img src={companyLogoImg} alt={"company-logo"} />
                    <div className={"relative ml-auto"}>
                        <BsFillBellFill className={"w-[2rem] h-[2rem] text-color-green-1"} />
                        <span
                            className={
                                "w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-color-red text-color-white absolute -top-[1rem] -right-[1rem]"
                            }
                        >
                            7
                        </span>
                    </div>
                    <div className={"flex items-center ml-[4rem]"}>
                        <img src={profileImg} alt={"profile-img"} />
                        <div className={"mx-[1.5rem]"}>
                            <p className={"font-bold"}>Kalu Abasiama</p>
                            <p className={"text-[#898989] text-[1.4rem] font-medium"}>Admin</p>
                        </div>
                        <MdKeyboardArrowRight className={"w-[2rem] h-[2rem]"} />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
