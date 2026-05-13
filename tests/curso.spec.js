// @ts-check
const { test, expect } = require('playwright/test');

test.describe('Página /curso', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/curso');
    await page.waitForLoadState('networkidle');
  });

  test('hero do curso renderiza', async ({ page }) => {
    const hero = page.locator('h1, h2').filter({ hasText: /curso|treinamento|formação/i }).first();
    await expect(hero).toBeVisible({ timeout: 5000 });
  });

  test('seção de módulos presente', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
    await page.waitForTimeout(400);
    const modulos = page.locator('*').filter({ hasText: /módulo|conteúdo|aula/i }).first();
    await expect(modulos).toBeVisible({ timeout: 5000 });
  });

  test('CTA WhatsApp existe', async ({ page }) => {
    const waLink = page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first();
    await expect(waLink).toBeVisible({ timeout: 5000 });
  });

  test('nav link volta para home', async ({ page }) => {
    const logo = page.locator('a[href="/"]').first();
    await expect(logo).toBeVisible();
  });
});

test.describe('/curso — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('sem overflow horizontal', async ({ page }) => {
    await page.goto('/curso');
    await page.waitForLoadState('networkidle');
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(392);
  });
});
