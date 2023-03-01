export interface IFlight {
    airport: string
    expectedTime: string
    flightIdentifier: string
    flightNumber: string
    originalTime: string
    score: string
    url: string
}

export async function fetchFlights(): Promise<IFlight[]> {
    try {
        const flightResponse = await fetch('../api/flights.json');
        const flights = await flightResponse.json() as { flights: IFlight[] }

        return flights.flights
    } catch (error) {
        //TODO implement error handling
        return []
    }
}

export function sortFlightsByExpectedTime(flights: IFlight[], sortDirection: "asc" | "decs") {
    return flights.sort(
        (flightA: IFlight, flightB: IFlight) => {

            const splitTimeA = flightA.expectedTime.split(":");
            const splitTimeB = flightB.expectedTime.split(":");

            if (splitTimeA.length < 2 || splitTimeB.length < 2) {
                return 0
            }

            const minutesA = +splitTimeA[0] * 60 + +splitTimeA[1]
            const minutesB = +splitTimeB[0] * 60 + +splitTimeB[1]
            return sortDirection === 'asc' ? minutesA - minutesB : minutesB - minutesA;
        }
    )
}

export const filterFlightByAirport = (value: string) => (flight: IFlight) => {
    const airport = flight.airport.toLowerCase()
    return airport.includes(value.toLocaleLowerCase())
}