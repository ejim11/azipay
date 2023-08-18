import InputComponent from "./InputComponent.tsx"
import { useState } from "react"

function IndividualForm(): JSX.Element {
    const [firstNameval, setFirstNameVal] = useState<string>("")
    const [lastNameval, setLastNameVal] = useState<string>("")
    const [emailval, setEmailVal] = useState<string>("")
    const [jobTitleval, setJobTitleVal] = useState<string>("")
    const [companySizeval, setCompanySizeVal] = useState<string>("")

    const submitFormHandler = (): void => {
        console.log(firstNameval, lastNameval, emailval, jobTitleval, companySizeval)
    }

    return (
        <form onSubmit={submitFormHandler}>
            <InputComponent
                inputName={"first-name"}
                placeholder={"First Name"}
                inputType={"text"}
                value={firstNameval}
                setValue={setFirstNameVal}
            />
            <InputComponent
                inputName={"last-name"}
                placeholder={"Last Name"}
                inputType={"text"}
                value={lastNameval}
                setValue={setLastNameVal}
            />
            <InputComponent
                inputName={"email"}
                placeholder={"Email"}
                inputType={"email"}
                value={emailval}
                setValue={setEmailVal}
            />
            <InputComponent
                inputName={"job-title"}
                placeholder={"Job Title"}
                inputType={"text"}
                value={jobTitleval}
                setValue={setJobTitleVal}
            />
            <InputComponent
                inputName={"company size"}
                placeholder={"Company Size"}
                inputType={"text"}
                value={companySizeval}
                setValue={setCompanySizeVal}
            />
            <button
                type={"submit"}
                className={
                    "bg-color-green-1 text-color-white rounded-[2.4rem] text-center py-[1.2rem] w-full mt-[3rem]"
                }
            >
                Request Demo
            </button>
        </form>
    )
}

export default IndividualForm
