import { test, expect } from '@playwright/test';

test(`Reproduction of the 'Clock' issue`, async ({ page }) => {
  await page.goto('https://7d7377.studytube-staging21.nl/');
  await page.fill('input[name="user[email]"]', 'repro@test.com');
  await page.fill('input[name="user[password]"]', 'playwright777!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://7d7377.studytube-staging21.nl/my-learning');
  await page.clock.setFixedTime(new Date('2026-01-01'));
  await page.goto('https://7d7377.studytube-staging21.nl/my-learning');
  await expect(page.locator('stu-unified-header')).toBeVisible();
  await expect(page.locator('.profile-widget__button-text')).toHaveClass(/crossed/);
});
