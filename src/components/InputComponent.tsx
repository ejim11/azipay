import React from "react"

interface InputProps {
    label?: string
    inputName: string
    placeholder: string
    inputType: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

function InputComponent({
    label,
    inputName,
    placeholder,
    inputType,
    value,
    setValue,
}: InputProps): JSX.Element {
    const setInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    return (
        <div className={"my-[1.5rem]"}>
            {label && <label>{label}</label>}
            <input
                name={inputName}
                placeholder={placeholder}
                className={"p-[1.6rem] rounded-[1.6rem] border border-[#B5B6B5] w-full "}
                type={inputType}
                value={value}
                onChange={setInputValueHandler}
            />
        </div>
    )
}

export default InputComponent
