import {  PropsWithChildren } from "react"

type ICardContainerProps = PropsWithChildren


export function FlightContainer({children}:ICardContainerProps) {

    return <div className="flightcontainer">
 
        {children}
    </div>
} 