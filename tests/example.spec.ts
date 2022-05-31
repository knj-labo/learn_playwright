import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
})

test ('visual regression testing with playwright', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('homepage.png')
})
