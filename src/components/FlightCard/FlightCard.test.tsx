import { expect, test } from '@playwright/experimental-ct-react';
import { FligtCard } from './FlightCard';
import { createFlight } from '../../mocks/flights';

test('render flight card', async ({ mount }) => {
  const component = await mount (<FligtCard flight={createFlight(
    {
      airport: "London", 
      flightIdentifier: 'testid', 
      flightNumber: "testnumber"
    })} />);

  await expect(component.getByText("London")).toBeVisible();
  await expect(component.getByText("testid")).toBeVisible();
  await expect(component.getByText("testnumber")).toBeVisible();

});
