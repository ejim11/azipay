import InputComponent from "./InputComponent.tsx"

function IndividualForm(): JSX.Element {
    return (
        <form>
            <InputComponent
                inputName={"first-name"}
                placeholder={"First Name"}
                inputType={"text"}
            />
            <InputComponent inputName={"last-name"} placeholder={"Last Name"} inputType={"text"} />
            <InputComponent inputName={"email"} placeholder={"Email"} inputType={"email"} />
            <InputComponent inputName={"job-title"} placeholder={"Job Title"} inputType={"text"} />
            <InputComponent
                inputName={"company size"}
                placeholder={"Company Size"}
                inputType={"text"}
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
