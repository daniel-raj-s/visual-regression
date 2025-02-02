import { test, expect } from '@playwright/test';
import { SwagHomePage } from '../../src/pages/SwagHomePage';
import { SwagInventoryPage } from '../../src/pages/SwagInventoryPage';

test.describe('Full Page Visual Regression', () => {
  test('should match baseline visual layout of the login page', async ({ page }) => {
    const homePage = new SwagHomePage(page);
    await homePage.goto();
    
    // Validate login landing page visual appearance
    await expect(page).toHaveScreenshot('login-page.png', {
      fullPage: true
    });
  });

  test('should match baseline visual layout of the inventory catalog grid', async ({ page, context }) => {
    const inventoryPage = new SwagInventoryPage(page);

    // Bypass UI login using cookie injection
    await context.addCookies([
      {
        name: 'session-username',
        value: 'standard_user',
        domain: 'www.saucedemo.com',
        path: '/'
      }
    ]);

    await inventoryPage.gotoDirectly();

    // Verify visual snapshot of inventory page catalog list
    await expect(page).toHaveScreenshot('inventory-catalog.png', {
      fullPage: true
    });
  });
});
