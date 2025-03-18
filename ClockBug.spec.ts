import { test, expect } from '@playwright/test';

test(`Reproduction of the 'Clock' issue`, async ({ page }) => {
  await page.goto('https://955aab.studytube-staging21.nl/');
  await page.fill('input[name="user[email]"]', 'repro@test.com');
  await page.fill('input[name="user[password]"]', 'playwright007!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/my-learning/);
  await page.clock.setFixedTime(new Date('2025-01-01'));
  await page.goto('https://955aab.studytube-staging21.nl/my-learning');
  await expect(page.locator('stu-unified-header')).toBeVisible();
  await expect(page.locator('stu-personal-budget-amount').nth(1)).not.toHaveClass(
    'profile-widget__button-text--crossed',
  );
});
