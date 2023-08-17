import appleLogo from "../../assets/apple-logo.svg"
import googleLogo from "../../assets/google-logo.svg"
import desktopImg1 from "../../assets/desktop-img-1.svg"
import desktopImg2 from "../../assets/desktop-img-2.svg"
import desktopImg3 from "../../assets/desktop-img-3.svg"
import desktopImg4 from "../../assets/desktop-img-4.svg"

interface AppStoreLink {
    path: string
    img: string
    alt: string
    firstText: string
    secondText: string
}

function FirstHomeSection(): JSX.Element {
    const appStoreLinks: AppStoreLink[] = [
        {
            path: "https://www.google.com",
            img: appleLogo,
            alt: "apple-logo",
            firstText: "Download on the",
            secondText: "Appstore",
        },
        {
            path: "https://www.google.com",
            img: googleLogo,
            alt: "google-logo",
            firstText: "Get on",
            secondText: "Google Play",
        },
    ]

    return (
        <section className={"mt-[8rem] ml-[13rem] flex items-center py-[9rem]  justify-between"}>
            <div className={"w-[40%]"}>
                <p className={"text-[6.4rem] font-medium text-color-black-2"}>
                    Run your
                    <span className={"text-color-green-1"}> payroll </span>
                    <span className={"text-color-gold"}>easily</span> in
                    <span className={"text-color-red"}> seconds</span>
                </p>
                <p className={"text-justify w-[90%] text-[2rem]"}>
                    We’ve built an all-inclusive simple solution for individual and businesses to
                    manage staff, pay salaries, bills, and relevant taxes all at once.
                </p>
                <button
                    className={
                        "py-[1.6rem] px-[3.6rem] rounded-[3.2rem] bg-color-green text-color-white mt-[2.4rem]"
                    }
                >
                    Start Using Free, Forever
                </button>
                <div className={"mt-[8rem]"}>
                    <p>Download the Eazipay App</p>
                    <div className={"flex items-center"}>
                        {appStoreLinks.map((appStore: AppStoreLink, i: number) => (
                            <a
                                key={i}
                                href={"https://www.google.com"}
                                className={
                                    "flex p-[1.2rem] rounded-[.8rem] shadow-lg mr-[1.5rem] last:mr-0"
                                }
                            >
                                <span
                                    className={
                                        "w-[4.8rem] h-[4.8rem] rounded-full bg-color-grey flex items-center justify-center"
                                    }
                                >
                                    <img src={appStore.img} alt={appStore.alt} />
                                </span>
                                <div className={"ml-[1.2rem] mt-[1.5rem]"}>
                                    <p className={"text-[1.2rem]"}>{appStore.firstText}</p>
                                    <p className={"font-bold"}>{appStore.secondText}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"relative"}>
                <div className={"block w-[67rem] h-[67rem] rounded-full bg-color-green"}></div>
                <img
                    src={desktopImg1}
                    alt={"desktop-img-1"}
                    className={"absolute right-0 top-[8rem]"}
                />
                <img src={desktopImg2} alt={"desktop-img-2"} className={"absolute top-0 "} />
                <img
                    src={desktopImg3}
                    alt={"desktop-img-3"}
                    className={"absolute top-[45%] -left-[18rem]"}
                />
                <img src={desktopImg4} alt={"desktop-img-4"} className={"absolute bottom-[8rem]"} />
            </div>
        </section>
    )
}

export default FirstHomeSection
