import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test.use({ viewport: { width: 1980, height: 500 } });

test('Check if all elements are rendered on App', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('schiphol');
  await expect(component).toContainText('Search Flights');
  await expect(component).toContainText('Found Fligths:');
});

test('Test if Radiobutton can be selected', async ({ mount }) => {
    const component = await mount(<App />);
     await component.getByLabel("Early").check()
    await expect(component.getByLabel("Early")).toBeChecked();
     
    await component.getByLabel("Late").check()
    await expect(component.getByLabel("Late")).toBeChecked();
    
  });

  test('Test if input can be populated and messge will be removed', async ({ mount }) => {
    const component = await mount(<App />);
    await expect(component).toContainText('Enter at least 3 characters');
    
    await component.getByLabel("Find your flight").fill('san');
    await expect(component).not.toContainText('Enter at least 3 characters');

  });