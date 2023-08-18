import appleLogo from "../../assets/apple-logo.svg"
import googleLogo from "../../assets/google-logo.svg"
import personImg from "../../assets/person.svg"

interface AppStoreLink {
    path: string
    img: string
    alt: string
    firstText: string
    secondText: string
}

function FourthHomeSection(): JSX.Element {
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
        <section className={"bg-color-orange flex py-[10rem] px-[13rem] justify-between"}>
            <div className={"w-[40%]"}>
                <h3 className={"text-[5.6rem] font-medium"}>
                    Free forever for your <span className={"text-color-red"}>salary payment</span>
                </h3>
                <p className={"text-[1.8rem] mt-[4.2rem] mb-[1.6rem]"}>
                    Subscribe to the Eazilife today
                </p>
                <div className={"flex items-center"}>
                    {appStoreLinks.map((appStore: AppStoreLink, i: number) => (
                        <a
                            key={i}
                            href={"https://www.google.com"}
                            className={
                                "flex p-[1.2rem] rounded-[.8rem] shadow-lg mr-[1.5rem] last:mr-0 bg-color-white items-center"
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
            <div className={"w-[40%] relative"}>
                <img src={personImg} alt={"person-img"} />
            </div>
        </section>
    )
}

export default FourthHomeSection
