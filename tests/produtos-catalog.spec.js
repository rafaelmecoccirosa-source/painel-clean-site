// @ts-check
const { test, expect } = require('playwright/test');

test.describe('Página /produtos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/produtos');
    await page.waitForLoadState('networkidle');
  });

  test('título da página visível', async ({ page }) => {
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible({ timeout: 5000 });
  });

  test('3 escovas listadas com links', async ({ page }) => {
    const g5 = page.locator('a[href="/escova-rotativa-g5"]').first();
    const d5 = page.locator('a[href="/escova-dupla-d5"]').first();
    const s5 = page.locator('a[href="/escova-solo-s5"]').first();
    await expect(g5).toBeVisible({ timeout: 5000 });
    await expect(d5).toBeVisible({ timeout: 5000 });
    await expect(s5).toBeVisible({ timeout: 5000 });
  });

  test('filter tabs / abas presentes', async ({ page }) => {
    const tabs = page.locator('button, [role="tab"]').filter({ hasText: /escov|acessório|todos/i });
    expect(await tabs.count()).toBeGreaterThan(0);
  });

  test('SKUs dos acessórios visíveis', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(400);
    const sku = page.locator('text=ZCP-APP').first();
    await expect(sku).toBeVisible({ timeout: 5000 });
  });
});

test.describe('/produtos — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('sem overflow horizontal', async ({ page }) => {
    await page.goto('/produtos');
    await page.waitForLoadState('networkidle');
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(392);
  });
});
