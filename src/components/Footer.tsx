import logo from "../assets/logo.svg"
import instagramImg from "../assets/Instagram.svg"
import twitterImg from "../assets/Twitter.svg"
import linkedinImg from "../assets/Group 36032.svg"
import facebookImg from "../assets/Group 36033.svg"
import { Link } from "react-router-dom"
import { BsSend } from "react-icons/bs"
import React, { useState } from "react"

interface FooterMediaLink {
    link: string
    img: string
}

interface FooterLink {
    title: string
    links: string[]
}

function Footer(): JSX.Element {
    const [emailVal, setEmailVal] = useState<string>("")

    const footerMediaLinks: FooterMediaLink[] = [
        {
            link: "https://www.instagram.com",
            img: instagramImg,
        },
        {
            link: "https://www.twitter.com",
            img: twitterImg,
        },
        {
            link: "https://www.linkedin.com",
            img: linkedinImg,
        },
        {
            link: "https://www.facebook.com",
            img: facebookImg,
        },
    ]

    const footerLinks: FooterLink[] = [
        {
            title: "product",
            links: ["individual", "businesses", "request demo", "pricing"],
        },
        {
            title: "legal",
            links: ["privacy policy", "terms of service"],
        },
        {
            title: "resources",
            links: ["FAQs", "blog", "career", "customer stories"],
        },
        {
            title: "contact us",
            links: ["eazipay@gmail.com", "+234 816 878 9518"],
        },
    ]

    const emailValChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmailVal(e.target.value)
    }

    const submitEmailHandler = (): void => {
        console.log(emailVal)
    }

    return (
        <footer className={"py-[6.4rem] px-[13rem] border-t border-[#EAEAEA] flex "}>
            <div className={"mr-[10rem]"}>
                <img src={logo} alt={"logo"} />
                <p className={"mt-[4rem] mb-[.8rem] text-[1.4rem] text-[#7C7C7C]"}>
                    Copyright © 2023 Eazipay.
                </p>
                <p className={"text-[1.4rem] mb-[4rem] text-[#7C7C7C]"}>All rights reserved</p>
                <div className={"flex "}>
                    {footerMediaLinks.map((link: FooterMediaLink, i: number) => (
                        <a href={link.link} key={i} className={"last:mr-0 mr-[1.5rem]"}>
                            <img src={link.img} alt={"media img"} />
                        </a>
                    ))}
                </div>
            </div>
            <div className={"flex justify-between flex-1"}>
                {footerLinks.map((footerLink: FooterLink, i: number) => (
                    <div key={i}>
                        <p className={"text-[2rem] font-medium capitalize mb-[2.4rem]"}>
                            {footerLink.title}
                        </p>
                        <div className={"flex flex-col"}>
                            {footerLink.links.map((link: string, i: number) => (
                                <Link
                                    to={"/"}
                                    key={i}
                                    className={"text-[#7C7C7C] mb-[1.5rem] capitalize"}
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                        {footerLink.title.includes("contact") && (
                            <form
                                className={
                                    "rounded-[1.6rem] bg-[#F2F1F1] flex px-[1.5rem] py-[1rem]  items-center mt-[2.4rem]"
                                }
                                onSubmit={submitEmailHandler}
                            >
                                <input
                                    placeholder={"Your email address"}
                                    type={"email"}
                                    className={
                                        "bg-color-transparent placeholder:text-[#515251] placeholder:text-[1.4rem]"
                                    }
                                    value={emailVal}
                                    onChange={emailValChangeHandler}
                                />
                                <button type={"submit"}>
                                    <BsSend className={"w-[1.8rem] h-[1.8rem]"} />
                                </button>
                            </form>
                        )}
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
