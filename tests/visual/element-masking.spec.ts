import { test, expect } from '@playwright/test';
import { SwagInventoryPage } from '../../src/pages/SwagInventoryPage';

test.describe('Element Snapshots & Visual Masking', () => {
  test.beforeEach(async ({ context }) => {
    // Inject auth cookie to bypass login for catalog visual checks
    await context.addCookies([
      {
        name: 'session-username',
        value: 'standard_user',
        domain: 'www.saucedemo.com',
        path: '/'
      }
    ]);
  });

  test('should capture element-specific snapshot of the shopping cart button', async ({ page }) => {
    const inventoryPage = new SwagInventoryPage(page);
    await inventoryPage.gotoDirectly();

    // Verify visual snapshot of only the shopping cart element
    await expect(inventoryPage.shoppingCart).toHaveScreenshot('shopping-cart-button.png');
  });

  test('should assert visual catalog layout with masked dynamic elements', async ({ page }) => {
    const inventoryPage = new SwagInventoryPage(page);
    await inventoryPage.gotoDirectly();

    // Verify catalog layout, masking the dynamic inventory descriptions and prices
    // This allows visual tests to pass even if item details or pricing updates
    const firstItemDesc = page.locator('.inventory_item_desc').first();
    const firstItemPrice = page.locator('.inventory_item_price').first();

    await expect(inventoryPage.firstProductItem).toHaveScreenshot('masked-product-card.png', {
      mask: [firstItemDesc, firstItemPrice]
    });
  });
});
