import { expect, test } from '@playwright/experimental-ct-react';
import Navbar from './Navbar';

test.use({ viewport: { width: 1980, height: 500 } });


test('Navbar to have correct items', async ({ mount }) => {
  const component = await mount (  
  <Navbar logo="schiphol"   />  
  );

  await expect(component.getByText("Schiphol")).toBeVisible();


});
