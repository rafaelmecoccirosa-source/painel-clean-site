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
    // filter visible: no mobile o primeiro match pode estar no drawer fechado da Nav
    for (const href of ['/escova-rotativa-g5', '/escova-dupla-d5', '/escova-solo-s5']) {
      await expect(page.locator(`a[href="${href}"]`).filter({ visible: true }).first()).toBeVisible({ timeout: 5000 });
    }
  });

  test('filter tabs / abas presentes', async ({ page }) => {
    const tabs = page.locator('button, [role="tab"]').filter({ hasText: /escov|acessório|todos/i });
    expect(await tabs.count()).toBeGreaterThan(0);
  });

  test('seção de acessórios com cards', async ({ page }) => {
    // A vitrine atual não exibe SKUs de acessórios — valida os cards da seção.
    await page.evaluate(() => document.getElementById('acessorios')?.scrollIntoView());
    await page.waitForTimeout(400);
    expect(await page.locator('#acessorios .va-card').count()).toBeGreaterThanOrEqual(4);
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
