import { test, expect } from '@playwright/test';

test(`Reproduction of the 'Clock' issue`, async ({ page }) => {
  await page.goto('https://955aab.studytube-staging21.nl/');
  await page.fill('input[name="user[email]"]', 'repro@test.com');
  await page.fill('input[name="user[password]"]', 'playwright007!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://955aab.studytube-staging21.nl/my-learning');
  await page.clock.setFixedTime(new Date('2025-04-01'));
  await page.goto('https://955aab.studytube-staging21.nl/my-learning');
  await expect(page.locator('stu-unified-header')).toBeVisible();
  await expect(page.locator('.profile-widget__button-text')).toHaveClass(/crossed/);
});
