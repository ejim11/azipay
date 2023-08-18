interface InputProps {
    label?: string
    inputName: string
    placeholder: string
    inputType: string
}

function InputComponent({ label, inputName, placeholder, inputType }: InputProps): JSX.Element {
    return (
        <div className={"my-[1rem]"}>
            {label && <label>{label}</label>}
            <input
                name={inputName}
                placeholder={placeholder}
                className={"p-[1.6rem] rounded-[1.6rem] border border-[#B5B6B5] w-full "}
                type={inputType}
            />
        </div>
    )
}

export default InputComponent
