import IndividualForm from "../IndividualForm.tsx"

function FifthHomeSection(): JSX.Element {
    return (
        <section className={"flex py-[13rem] px-[13rem] justify-between items-center"}>
            <div className={"w-[40%]"}>
                <h3 className={"text-[#11453B] text-[6.4rem] font-medium"}>
                    Get an Exclusive Demo of Eazipay
                </h3>
                <p className={"text-justify text-[2rem]"}>
                    Our greatest priority is to put you and your business first. Let’s show you how
                    we can help.
                </p>
            </div>
            <div className={"rounded-[3.2rem] shadow-2xl p-[3.2rem] w-[40%]"}>
                <p className={"text-[2.8rem] font-bold text-center mb-[1.2rem]"}>
                    First things first
                </p>
                <p className={"text-[1.8rem] text-center mb-[2.4rem]"}>
                    We want to serve you better. Tell us a bit about yourself or company
                </p>
                <div
                    className={
                        "flex p-[.8rem] border border-[#E7E8E7] rounded-[1.6rem] text-center justify-between mb-[2.5rem]"
                    }
                >
                    <p
                        className={
                            " bg-color-green-1 text-color-white py-[.8rem] rounded-[1.2rem] w-[48%]"
                        }
                    >
                        Individual
                    </p>
                    <p className={"bg-[#F2F1F1] py-[.8rem] rounded-[1.2rem] w-[48%]"}>Company</p>
                </div>
                <IndividualForm />
            </div>
        </section>
    )
}

export default FifthHomeSection
