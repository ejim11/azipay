import { motion } from "framer-motion"

interface InfoData {
    title: string
    text: string[]
}

function SecondHomeSection(): JSX.Element {
    const infoData: InfoData[] = [
        {
            title: "Tamper-proof Payroll for LIfe",
            text: [
                "Your staff payroll history is kept in one place forever",
                "No more excel sheet or manual records",
                "Download your payroll history anytime you need it.",
            ],
        },
        {
            title: "All Payroll, Anytime Anywhere",
            text: [
                "Wherever you are Eazipay has got you covered on ALL your Payroll tasks.",
                "Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!",
            ],
        },
        {
            title: "Payroll in Seconds",
            text: [
                "Never again wil you spend more than 2 minutes on payroll.",
                "Just click on your staff and bulk-pay them at once.",
                "Payment is done permanently.",
            ],
        },
    ]

    return (
        <section className={"bg-color-light-green py-[10rem]"}>
            <h2 className={"text-center text-color-green text-[6.4rem] font-medium"}>
                For Individuals and Businesses
            </h2>
            <p className={"text-center text-[2rem] text-color-black-2"}>
                Join 200+ businesses using Eazipay's easy solution.
            </p>
            <div className={"flex my-[6.4rem] px-[12rem]"}>
                {infoData.map((info: InfoData, i: number) => (
                    <motion.div
                        whileHover={{
                            zIndex: 20,
                            scale: 1.02,
                        }}
                        key={i}
                        className={
                            "info-data-bg first:ml-0 -ml-[10rem] text-color-white rounded-[1.6rem] px-[6.4rem] py-[4rem] flex-1 relative"
                        }
                    >
                        <p className={"text-[2.5rem] mb-[2.4rem] font-bold"}>{info.title}</p>
                        {info.text.map((text: string, i: number) => (
                            <p key={i} className={"mb-[1rem]"}>
                                {text}
                            </p>
                        ))}
                    </motion.div>
                ))}
            </div>
            <div className={"mt-[6.4rem] text-center"}>
                <p>We are happy to answer your queries. Please, reach us at</p>
                <p>
                    <a href="mailto:hello@myeazipay.com" className={"text-color-red"}>
                        hello@myeazipay.com
                    </a>{" "}
                    and expect our response shortly after.
                </p>
            </div>
        </section>
    )
}

export default SecondHomeSection
