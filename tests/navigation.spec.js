// @ts-check
const { test, expect } = require('playwright/test');

const PAGES = [
  { url: '/', title: /Painel Clean/i },
  { url: '/curso', title: /curso|treinamento/i },
  { url: '/produtos', title: /produtos|catálogo/i },
  { url: '/escova-rotativa-g5', title: /G5|rotativa/i },
  { url: '/escova-dupla-d5', title: /D5|dupla/i },
  { url: '/escova-solo-s5', title: /S5|solo/i },
];

test.describe('Navigation — todas as páginas carregam', () => {
  for (const page of PAGES) {
    test(`GET ${page.url} → 200`, async ({ page: pw }) => {
      const response = await pw.goto(page.url);
      expect(response?.status()).toBe(200);
    });

    test(`${page.url} → sem erro de console crítico`, async ({ page: pw }) => {
      const errors = [];
      pw.on('pageerror', (err) => errors.push(err.message));
      await pw.goto(page.url);
      await pw.waitForLoadState('networkidle');
      const fatal = errors.filter(
        (e) => !e.includes('Instagram') && !e.includes('fbcdn') && !e.includes('ResizeObserver')
      );
      expect(fatal, `Erros no console: ${fatal.join('\n')}`).toHaveLength(0);
    });
  }
});

test.describe('Nav — links funcionam', () => {
  test('logo leva para /', async ({ page }) => {
    await page.goto('/curso');
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('nav tem link /curso', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('nav a[href="/curso"]');
    await expect(link).toBeVisible();
  });

  test('nav tem link /produtos', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('nav a[href="/produtos"]');
    await expect(link).toBeVisible();
  });
});

test.describe('Nav mobile — menu funciona', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('hamburger abre o menu mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // botão hamburger — qualquer botão dentro da nav sem href
    const hamburger = page.locator('nav button').first();
    await hamburger.click();
    // algum link de nav deve ficar visível
    const navLink = page.locator('nav a[href="/curso"], nav a[href="/produtos"]').first();
    await expect(navLink).toBeVisible({ timeout: 3000 });
  });
});
