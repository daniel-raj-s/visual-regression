import { Page, Locator } from '@playwright/test';

export class SwagInventoryPage {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly inventoryList: Locator;
  readonly firstProductItem: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerContainer = page.locator('.header_container');
    this.inventoryList = page.locator('.inventory_list');
    this.firstProductItem = page.locator('.inventory_item').first();
    this.shoppingCart = page.locator('.shopping_cart_link');
  }

  async gotoDirectly() {
    // Inject auth cookie on context first (handled in test) then go here
    await this.page.goto('/inventory.html');
  }
}
