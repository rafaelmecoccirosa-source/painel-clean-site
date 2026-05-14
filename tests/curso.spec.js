// @ts-check
const { expect } = require('playwright/test');
const { test, waitForReact } = require('./fixtures');

test.describe('Página /curso', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/curso');
    await waitForReact(page);
  });

  test('hero do curso renderiza', async ({ page }) => {
    await expect(
      page.locator('h1, h2').filter({ hasText: /curso|treinamento|formação/i }).first()
    ).toBeVisible({ timeout: 5000 });
  });

  test('seção de módulos presente', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
    await page.waitForTimeout(400);
    await expect(
      page.locator('*').filter({ hasText: /módulo|conteúdo|aula/i }).first()
    ).toBeVisible({ timeout: 5000 });
  });

  test('CTA WhatsApp existe', async ({ page }) => {
    await expect(
      page.locator('a[href*="wa.me"], a[href*="whatsapp"]').first()
    ).toBeVisible({ timeout: 5000 });
  });

  test('nav link volta para home', async ({ page }) => {
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
  });
});

test.describe('/curso — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('sem overflow horizontal', async ({ page }) => {
    await page.goto('/curso');
    await waitForReact(page);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(392);
  });
});
