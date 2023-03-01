import { useEffect, useState } from 'react';
import { fetchFlights, filterFlightByAirport, IFlight, sortFlightsByExpectedTime } from "../services/flightService";
import { ISort } from '../types';

export function useFlights(search: string, sort: ISort = 'asc', count: number) {
    const [flights, setFlights] = useState<IFlight[]>([]);
    useEffect(() => {
        fetchFlights().then((value) => {
            setFlights(value);
        })

    }, [])

    function flightsLimitAndSort() {
        const flightsFiltered = flights.filter(filterFlightByAirport(search)) ?? []
        const flightsSorted = sortFlightsByExpectedTime(flightsFiltered, sort);
        return flightsSorted.splice(0, count)
    }

    return [flightsLimitAndSort()]
}