// @ts-check
const { expect } = require('playwright/test');
const { test, waitForReact } = require('./fixtures');

test.describe('Página /produtos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/produtos');
    await waitForReact(page);
  });

  test('título da página visível', async ({ page }) => {
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 5000 });
  });

  test('3 escovas listadas com links', async ({ page }) => {
    await expect(page.locator('a[href="/escova-rotativa-g5"]').first()).toBeVisible({ timeout: 5000 });
    await expect(page.locator('a[href="/escova-dupla-d5"]').first()).toBeVisible({ timeout: 5000 });
    await expect(page.locator('a[href="/escova-solo-s5"]').first()).toBeVisible({ timeout: 5000 });
  });

  test('filter tabs / abas presentes', async ({ page }) => {
    const tabs = page.locator('button, [role="tab"]').filter({ hasText: /escov|acessório|todos/i });
    expect(await tabs.count()).toBeGreaterThan(0);
  });

  test('SKUs dos acessórios visíveis', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(400);
    await expect(page.locator('text=ZCP-APP').first()).toBeVisible({ timeout: 5000 });
  });
});

test.describe('/produtos — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('sem overflow horizontal', async ({ page }) => {
    await page.goto('/produtos');
    await waitForReact(page);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(392);
  });
});
