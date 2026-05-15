// @ts-check
const { expect } = require('playwright/test');
const { test, waitForReact } = require('./fixtures');

const PRODUCTS = [
  { url: '/escova-rotativa-g5', sku: 'ZCP-0175-G5', name: 'G5', speed: '260' },
  { url: '/escova-dupla-d5',    sku: 'ZCP-0275-D5', name: 'D5', speed: '200' },
  { url: '/escova-solo-s5',     sku: 'ZCP-0175-S5', name: 'S5', speed: '160' },
];

for (const product of PRODUCTS) {
  test.describe(`Produto ${product.name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(product.url);
      await waitForReact(page);
    });

    test('SKU visível na página', async ({ page }) => {
      await expect(page.locator(`text=${product.sku}`).first()).toBeVisible({ timeout: 5000 });
    });

    test('velocidade (painéis/h) visível', async ({ page }) => {
      const specsSection = page.locator('section').filter({ hasText: 'Ficha técnica' });
      await expect(specsSection.locator(`text=${product.speed} painéis/h`).first()).toBeVisible({ timeout: 5000 });
    });

    test('sticky buy bar aparece após scroll', async ({ page }) => {
      await page.evaluate(() => window.scrollTo(0, 700));
      await page.waitForTimeout(800);
      const stickyBar = page.locator('[style*="position: fixed"], [style*="position:fixed"]').filter({
        hasText: /pedir|orçamento|whatsapp|comprar/i,
      });
      expect(await stickyBar.count()).toBeGreaterThan(0);
    });

    test('link para WhatsApp existe', async ({ page }) => {
      await expect(
        page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first()
      ).toBeVisible({ timeout: 5000 });
    });

    test('breadcrumb tem link para /produtos', async ({ page }) => {
      await expect(page.locator('nav:not([class]) a[href="/produtos"]').first()).toBeVisible({ timeout: 5000 });
    });

    test('tabela mini-compare está presente', async ({ page }) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(500);
      await expect(page.locator('table, [role="table"]').first()).toBeVisible({ timeout: 5000 });
    });

    test('navegação prev/next entre produtos', async ({ page }) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
      const otherLinks = page.locator(
        'a[href="/escova-rotativa-g5"], a[href="/escova-dupla-d5"], a[href="/escova-solo-s5"]'
      ).filter({ hasNot: page.locator(`[href="${product.url}"]`) });
      expect(await otherLinks.count()).toBeGreaterThan(0);
    });
  });

  test.describe(`Produto ${product.name} — mobile`, () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('sticky buy bar visível no mobile após scroll', async ({ page }) => {
      await page.goto(product.url);
      await waitForReact(page);
      await page.evaluate(() => window.scrollTo(0, 700));
      await page.waitForTimeout(800);
      const stickyBar = page.locator('[style*="position: fixed"], [style*="position:fixed"]').filter({
        hasText: /pedir|orçamento|whatsapp|comprar/i,
      });
      expect(await stickyBar.count()).toBeGreaterThan(0);
    });

    test('sem overflow horizontal no mobile', async ({ page }) => {
      await page.goto(product.url);
      await waitForReact(page);
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(392);
    });
  });
}
