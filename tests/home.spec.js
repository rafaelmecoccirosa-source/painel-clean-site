// @ts-check
const { test, expect } = require('playwright/test');

test.describe('Home — seções visíveis', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('hero renderiza headline principal', async ({ page }) => {
    const hero = page.locator('section, div').filter({ hasText: /escov|painel solar/i }).first();
    await expect(hero).toBeVisible();
  });

  test('seção de produtos tem 3 cards', async ({ page }) => {
    // scroll até a seção produtos
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
    await page.waitForTimeout(500);
    // links para os 3 produtos devem existir
    const g5 = page.locator('a[href="/escova-rotativa-g5"]');
    const d5 = page.locator('a[href="/escova-dupla-d5"]');
    const s5 = page.locator('a[href="/escova-solo-s5"]');
    await expect(g5.first()).toBeVisible({ timeout: 5000 });
    await expect(d5.first()).toBeVisible({ timeout: 5000 });
    await expect(s5.first()).toBeVisible({ timeout: 5000 });
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
    const faqItems = page.locator('button, details, [role="button"]').filter({ hasText: /limpe|funciona|quanto|por que/i });
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

  test('hero visível no mobile sem overflow horizontal', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = 390;
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 2); // tolerância 2px
  });

  test('links para produtos visíveis no mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
    await page.waitForTimeout(500);
    const g5 = page.locator('a[href="/escova-rotativa-g5"]').first();
    await expect(g5).toBeVisible({ timeout: 5000 });
  });
});
