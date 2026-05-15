// @ts-check
const { expect } = require('playwright/test');
const { test, waitForReact } = require('./fixtures');

const PAGES = ['/', '/curso', '/produtos', '/escova-rotativa-g5', '/escova-dupla-d5', '/escova-solo-s5'];

test.describe('Navigation — todas as páginas carregam', () => {
  for (const url of PAGES) {
    test(`GET ${url} → 200`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);
    });

    test(`${url} → sem erro de console crítico`, async ({ page }) => {
      const errors = [];
      page.on('pageerror', (err) => errors.push(err.message));
      await page.goto(url);
      await waitForReact(page);
      const fatal = errors.filter(
        (e) => !e.includes('Instagram') && !e.includes('fbcdn') && !e.includes('ResizeObserver')
      );
      expect(fatal, `Erros no console: ${fatal.join('\n')}`).toHaveLength(0);
    });
  }
});

test.describe('Nav — links funcionam', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('logo leva para /', async ({ page }) => {
    await page.goto('/curso');
    await waitForReact(page);
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('nav tem link /curso', async ({ page }) => {
    await page.goto('/');
    await waitForReact(page);
    await expect(page.locator('nav a[href="/curso"]').first()).toBeVisible();
  });

  test('nav tem link /produtos', async ({ page }) => {
    await page.goto('/');
    await waitForReact(page);
    await expect(page.locator('nav a[href="/produtos"]').first()).toBeVisible();
  });
});

test.describe('Nav mobile — menu funciona', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger abre o menu mobile', async ({ page }) => {
    await page.goto('/');
    await waitForReact(page);
    await page.locator('button[aria-label="Menu"]').click();
    await page.waitForTimeout(300);
    // mobile nav links — visible after open
    const mobileNavLink = page.locator('nav.nav-mobile a[href="/curso"]');
    await expect(mobileNavLink).toBeVisible({ timeout: 3000 });
  });
});
