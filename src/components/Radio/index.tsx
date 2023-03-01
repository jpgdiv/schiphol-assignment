import {  useState } from "react"
import { ISort } from "../../services/flightService"

type IRadioInputProps = {
    label: string
    value: string
    onChangeHandler: (val: ISort) => void
    id: string
    name: string
}

export function RadioInput({ label, onChangeHandler, id, name}:IRadioInputProps)  {
    
    return <div className="sh-input--radio">
        <label >
            {label}
            <input  type="radio" id={id} name={name} onChange={(e) => { console.log(e.target.value); onChangeHandler(e.target.value === "desc" ? "desc" : 'asc')}} value={id} />
            <span></span>
        
        </label>
    </div>
}

 