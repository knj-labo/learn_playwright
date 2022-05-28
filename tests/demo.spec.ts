import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
});

test.describe('Demo' , () => {
    test('should have the logo and be visible', async ({ page}) => {
        const logo = await page.locator('img[alt="logo"]');
        await expect(logo).toBeVisible();
    })
});