import { IFlight } from "../services/flightService";

export function createFlight(overide?: Partial<IFlight>): IFlight {
    return {
        flightIdentifier: "D20190401UA969",
        flightNumber: "UA 969",
        airport: "San Francisco",
        expectedTime: "14:50",
        originalTime: "14:50",
        url: "/en/departures/flight/D20190401UA969/",
        score: "70.55272",
        ...overide
    }
}
