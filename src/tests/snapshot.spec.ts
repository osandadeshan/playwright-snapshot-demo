import { test, expect } from '@playwright/test';

test('homepage should match snapshot', async ({ page }) => {
  await page.goto('https://playwright.dev');

  // Take a full page snapshot
  expect(await page.screenshot()).toMatchSnapshot('homepage.png');
});

test('logo should match snapshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  const logo = page.locator('.navbar__logo');

  // Take element-level snapshot
  expect(await logo.screenshot()).toMatchSnapshot('logo.png');
});
