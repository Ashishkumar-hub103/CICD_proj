const { test, expect } = require('@playwright/test');

test('basic check', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Hello/); // This will fail unless you serve HTML
  await expect(page.locator('body')).toContainText('Hello, CI/CD with Jenkins!');
});
