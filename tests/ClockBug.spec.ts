import { test, expect } from '@playwright/test';

test.describe(`Reproduction of the 'Clock' issue`, () => {

  test(`Test ONE - run this test in DEBUG MODE:
  Check browser freeze + infinite timeout when interacting with the browser after page.pause`, async ({ page }) => {
    await page.goto('https://7d7377.studytube-staging21.nl/');
    await page.fill('input[name="user[email]"]', 'repro@test.com');
    await page.fill('input[name="user[password]"]', 'playwright777!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://7d7377.studytube-staging21.nl/my-learning');
    await page.clock.setFixedTime(new Date('2026-01-01'));
    await page.goto('https://7d7377.studytube-staging21.nl/my-learning');
    await expect(page.locator('stu-unified-header')).toBeVisible();
    await page.pause()
    await expect(page.locator('.profile-widget__button-text')).toHaveClass(/crossed/);
  });

  test(`Test TWO - run this test in UI MODE:
  Check browser freeze + infinite timeout when the assertion is unsuccessful`, async ({ page }) => {
    await page.goto('https://7d7377.studytube-staging21.nl/');
    await page.fill('input[name="user[email]"]', 'repro@test.com');
    await page.fill('input[name="user[password]"]', 'playwright777!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://7d7377.studytube-staging21.nl/my-learning');
    await page.clock.setFixedTime(new Date('2026-01-01'));
    await page.goto('https://7d7377.studytube-staging21.nl/my-learning');
    await expect(page.locator('stu-unified-header')).toBeVisible();
    await expect(page.locator('.profile-widget__button-text')).toHaveClass(/non-existent-class/);
  });
});
