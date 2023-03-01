import {  PropsWithChildren } from "react"
import { IFlight } from '../../services/flightService';

type IFlightCardProps = PropsWithChildren<{
    flight: IFlight,
}>

export function FligtCard({flight}:IFlightCardProps) {
    return <div className="flightcard">
        <div className="flightcard--flight">
            <span className="flightcard--flight--airport">{flight.airport}</span>
            <span className="flightcard--flight--number">{flight.flightNumber}</span>
        </div>
        <div className="flightcard--time">
            <span className="flightcard--time--original">orignal: {flight.originalTime}</span>
          
            <span className="flightcard--time--expected">expected time: {flight.expectedTime}</span>
        </div>
        <div className="flightcard--id"><span>flight id:</span><span>{flight.flightIdentifier}</span></div>
    </div>
} 