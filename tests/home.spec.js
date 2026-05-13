// @ts-check
const { expect } = require('playwright/test');
const { test, waitForReact } = require('./fixtures');

test.describe('Home — seções visíveis', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForReact(page);
  });

  test('hero renderiza headline principal', async ({ page }) => {
    const hero = page.locator('section, div').filter({ hasText: /escov|painel solar/i }).first();
    await expect(hero).toBeVisible();
  });

  test('seção de produtos tem 3 cards', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 2800));
    await page.waitForTimeout(500);
    await expect(page.locator('#equipamentos a[href="/escova-rotativa-g5"]').first()).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#equipamentos a[href="/escova-dupla-d5"]').first()).toBeVisible({ timeout: 5000 });
    await expect(page.locator('#equipamentos a[href="/escova-solo-s5"]').first()).toBeVisible({ timeout: 5000 });
  });

  test('calculadora ROI renderiza inputs', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const inputs = page.locator('input[type="range"], input[type="number"]');
    expect(await inputs.count()).toBeGreaterThan(0);
  });

  test('FAQ tem ao menos um item', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const faqItems = page.locator('button, details, [role="button"]').filter({
      hasText: /limpe|funciona|quanto|por que/i,
    });
    expect(await faqItems.count()).toBeGreaterThan(0);
  });

  test('footer tem link do Instagram', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const igLink = page.locator('footer a[href*="instagram"]');
    await expect(igLink.first()).toBeVisible();
  });
});

test.describe('Home mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('sem overflow horizontal no mobile', async ({ page }) => {
    await page.goto('/');
    await waitForReact(page);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(392);
  });

  test('links para produtos visíveis no mobile', async ({ page }) => {
    await page.goto('/');
    await waitForReact(page);
    // Scroll to products section (#equipamentos at ~2660px)
    await page.evaluate(() => window.scrollTo(0, 2800));
    await page.waitForTimeout(500);
    const g5 = page.locator('#equipamentos a[href="/escova-rotativa-g5"]');
    await expect(g5.first()).toBeVisible({ timeout: 5000 });
  });
});
