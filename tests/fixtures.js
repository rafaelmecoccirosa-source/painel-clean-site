// @ts-check
const { test: base } = require('playwright/test');
const path = require('path');
const fs = require('fs');

const DEPS_BASE = '/tmp/react-deps/node_modules';

const CDN_MAP = {
  'unpkg.com/react@18.3.1/umd/react.development.js': path.join(DEPS_BASE, 'react/umd/react.development.js'),
  'unpkg.com/react-dom@18.3.1/umd/react-dom.development.js': path.join(DEPS_BASE, 'react-dom/umd/react-dom.development.js'),
  'unpkg.com/@babel/standalone@7.29.0/babel.min.js': path.join(DEPS_BASE, '@babel/standalone/babel.min.js'),
};

const test = base.extend({
  page: async ({ page }, use) => {
    for (const [urlPattern, localPath] of Object.entries(CDN_MAP)) {
      await page.route(`**/${urlPattern}`, (route) => {
        route.fulfill({
          status: 200,
          contentType: 'application/javascript',
          body: fs.readFileSync(localPath),
        });
      });
    }
    // Abort Instagram embed (external, not needed for tests)
    await page.route('**instagram.com/embed.js**', (route) => route.abort());
    await use(page);
  },
});

async function waitForReact(page) {
  await page.waitForLoadState('networkidle');
  await page.waitForSelector('#root > *', { timeout: 30000 });
}

module.exports = { test, waitForReact };
