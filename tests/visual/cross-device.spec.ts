import { test, expect } from '@playwright/test';
import { SwagHomePage } from '../../src/pages/SwagHomePage';

test.describe('Responsive Design Visual Checks', () => {
  test('should verify responsive design on custom viewports', async ({ page }) => {
    const homePage = new SwagHomePage(page);
    await homePage.goto();

    // 1. Audit visual layout in Desktop Viewport (1280x720)
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(homePage.loginContainer).toHaveScreenshot('desktop-login-wrapper.png');

    // 2. Audit visual layout in Tablet Viewport (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(homePage.loginContainer).toHaveScreenshot('tablet-login-wrapper.png');

    // 3. Audit visual layout in Mobile Viewport (375x667)
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(homePage.loginContainer).toHaveScreenshot('mobile-login-wrapper.png');
  });
});
