import { expect, test } from '@playwright/test';
import { filterFlightByAirport, sortFlightsByExpectedTime } from './flightService';
import { createFlight } from '../mocks/flights';
test.use({ viewport: { width: 1980, height: 500 } });

const firstFlight = createFlight({ airport: "NY", expectedTime: "4:00" });

const flights = [
    createFlight({ airport: "lon", expectedTime: "8:00" }),
    createFlight({ airport: "lon", expectedTime: "12:30" }),
    firstFlight,
    createFlight({ airport: "ams", expectedTime: "11:00" }),
    createFlight({ airport: "san", expectedTime: "13:00" }),
]

test('test flightservice sorting function', () => {

    const sortedFlightds = sortFlightsByExpectedTime(flights, "asc")
    expect(sortedFlightds[0]).toEqual(firstFlight);
});

test('test flightservice filter function', () => {


    const filteredFlight = flights.filter(filterFlightByAirport('lon'))
    expect(filteredFlight).toHaveLength(2)
});