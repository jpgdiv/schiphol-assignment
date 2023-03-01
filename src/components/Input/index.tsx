import {  useState } from "react"

type IInputProps = {
    label: string
    placeholder?: string
    value: string
    onChangeHandler: (val: string) => void
}

export function Input({label, placeholder, onChangeHandler,value}:IInputProps){
    
    return <div className="sh-input sh-input--text">
        <label>
            {label}
            <input placeholder={placeholder}  type="text" onChange={(e) => {onChangeHandler(e.target.value)}} value={value} />
        </label>
    </div>
}