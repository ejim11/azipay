import onBoardingImg from "../../assets/onboarding.svg"
import connector1 from "../../assets/connector-1.svg"
import connector2 from "../../assets/connector-2.svg"

interface Step {
    title: string
    text: string
}
function ThirdHomeSection(): JSX.Element {
    const steps: Step[] = [
        {
            title: "Create your free account",
            text: "Click here to set up your Eazipay account.",
        },
        {
            title: "Add Employee Data",
            text: "Your employee information is 100% safe and secure.",
        },
        {
            title: "Prepare your Transaction",
            text: "Run payroll: Bulk Salaries and Compliance are done at once!",
        },
    ]

    return (
        <section className={"py-[10rem]"}>
            <h2 className={"text-[5.6rem] text-color-green-1 font-medium text-center"}>
                How Eazipay Works
            </h2>
            <p className={"text-center text-color-black-1 mb-[10rem]"}>
                Get started in 3 simple steps.
            </p>
            <div className={"flex justify-between w-full px-[13rem]"}>
                <div className={"relative"}>
                    <div
                        className={
                            "w-[57.7rem] h-[57.7rem] rounded-full bg-color-green-4 border border-color-green-1 flex items-center justify-center "
                        }
                    >
                        <div
                            className={
                                "w-[51.8rem] h-[51.8rem] rounded-full bg-color-green-3 flex items-center justify-center"
                            }
                        >
                            <div
                                className={"w-[45.1rem] h-[45.1rem] rounded-full bg-color-green-1 "}
                            ></div>
                        </div>
                    </div>
                    <img src={onBoardingImg} alt={"onboarding"} className={"abs-center"} />
                </div>
                <div className={"w-[40%] relative"}>
                    {steps.map((step: Step, i: number) => (
                        <div key={i} className={"mb-[6.4rem] last:mb-0 w-[78%]"}>
                            <p
                                className={` ${
                                    i === 0
                                        ? "bg-color-green-1 text-color-white"
                                        : "bg-color-grey text-color-green-1"
                                }   w-[6.4rem] h-[6.4rem] text-[3.6rem] rounded-[1.6rem] flex items-center justify-center`}
                            >
                                {i + 1}
                            </p>
                            <p className={"font-bold text-color-black-1 text-[2rem] my-[1.6rem]"}>
                                {step.title}
                            </p>
                            <p>{step.text}</p>
                        </div>
                    ))}
                    <img
                        src={connector1}
                        alt={"connector-1"}
                        className={"absolute top-[3rem] -left-[6rem]"}
                    />
                    <img
                        src={connector2}
                        alt={"connector-2"}
                        className={"absolute top-[25rem] right-[10rem]"}
                    />
                </div>
            </div>
        </section>
    )
}

export default ThirdHomeSection
