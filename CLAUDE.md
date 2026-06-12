# CLAUDE.md — painel-clean-site

> Fonte de verdade para o site institucional da Painel Clean (painelclean.com.br).
> Atualizado em: maio/2026 (PR #4 + PR #5 + vitrine redesign + D5 cinematic)

---

## Visão geral do projeto

Site institucional da **Painel Clean** — fabricante de escovas semiautomáticas para limpeza de painéis solares, sediada em SC.

- **Repo:** github.com/rafaelmecoccirosa-source/painel-clean-site
- **Deploy:** painel-clean-site.vercel.app (produção)
- **Stack:** HTML estático + React via Babel (sem build, sem Next.js)
- **Design system:** `public/tokens.css` (variáveis CSS do brandbook)

---

## Estrutura de arquivos

```
/
├── index.html                    # Página inicial
├── app.jsx                       # Root da home — TweaksCtx.Provider + ordem das seções
├── curso.html                    # Página /curso (landing do treinamento)
├── curso-app.jsx                 # Root de /curso
├── produtos.html                 # Página /produtos (catálogo completo)
├── produtos-app.jsx              # Root de /produtos
├── escova-rotativa-g5.html       # Página /escova-rotativa-g5
├── escova-rotativa-g5-app.jsx    # Root de /escova-rotativa-g5
├── escova-dupla-d5.html          # Página /escova-dupla-d5
├── escova-dupla-d5-app.jsx       # Root de /escova-dupla-d5
├── escova-solo-s5.html           # Página /escova-solo-s5
├── escova-solo-s5-app.jsx        # Root de /escova-solo-s5
├── tweaks-panel.jsx              # Painel de tweaks (dev only)
├── playwright.config.js          # Config Playwright (2 projects: desktop-chrome, mobile-chrome)
├── tests/
│   ├── fixtures.js               # CDN mock + waitForReact helper
│   ├── home.spec.js
│   ├── curso.spec.js
│   ├── produtos.spec.js
│   └── product-pages.spec.js     # G5, D5, S5
├── vercel.json                   # Config Vercel — serving estático, sem build
├── public/
│   ├── tokens.css                # Design tokens (cores, tipografia, espaçamentos)
│   └── images/                   # Fotos dos produtos, técnicos, hero, logo
└── components/
    ├── _config.jsx               # Globals: TweaksCtx, Icon, Logo, wa()
    ├── Nav.jsx
    ├── Hero.jsx
    ├── Marquee.jsx
    ├── About.jsx
    ├── SocialProof.jsx           # Stats + depoimentos
    ├── Products.jsx
    ├── Compare.jsx               # Tabela comparativa 11 linhas
    ├── ROI.jsx                   # Calculadora interativa de ROI
    ├── Training.jsx              # Seção de treinamento/curso
    ├── ReelsSection.jsx          # Instagram Reels (3 reels via embed.js)
    ├── Platform.jsx              # Seção da plataforma de serviços
    ├── Faq.jsx
    ├── CtaFinal.jsx
    └── Footer.jsx
```

---

## Páginas e URLs

| URL | Arquivo HTML | App JSX |
|-----|-------------|---------|
| `/` | `index.html` | `app.jsx` |
| `/curso` | `curso.html` | `curso-app.jsx` |
| `/produtos` | `produtos.html` | `produtos-app.jsx` |
| `/escova-rotativa-g5` | `escova-rotativa-g5.html` | `escova-rotativa-g5-app.jsx` |
| `/escova-dupla-d5` | `escova-dupla-d5.html` | `escova-dupla-d5-app.jsx` |
| `/escova-solo-s5` | `escova-solo-s5.html` | `escova-solo-s5-app.jsx` |

`cleanUrls: true` no `vercel.json` remove a extensão `.html` das URLs automaticamente.

---

## Catálogo de produtos

### Escovas
| Nome | SKU | Velocidade |
|------|-----|-----------|
| Escova Dupla PRO | ZCP-0275-D5 | 260 painéis/h |
| Escova Rotativa G5 | ZCP-0175-G5 | 200 painéis/h |
| Escova Solo S5 | ZCP-0175-S5 | 160 painéis/h |

> **Nota:** "Escova Dupla PRO" é o nome de marketing (antes "Escova Dupla D5"). URL permanece `/escova-dupla-d5` e SKU permanece `ZCP-0275-D5`.

### Acessórios
| Nome | SKU |
|------|-----|
| Refil de Cerdas G5 | ZCP-APPG51 |
| Refil de Cerdas D5 | ZCP-APPD51 |
| Refil de Cerdas S5 | ZCP-APPS51 |
| Cabo Telescópico | ZCP-APPA01 |
| (nome a confirmar) | ZCP-APPA02 |

---

## Design tokens (cores principais)

| Token | Valor | Uso |
|-------|-------|-----|
| `--pc-green` | `#3AD580` | Verde vibrante, CTAs |
| `--pc-dark` | `#0F382B` | Fundo escuro, hero |
| `--pc-darker` | `#0C281F` | Seções intermediárias escuras |
| `--pc-deepest` | `#0A1F17` | Footer |
| `--pc-mid` | `#1B3A2D` | Painéis de destaque escuros |
| `--pc-cream` | `#FFFBEC` | Fundo claro |
| `--t-stage` | `#ECECEA` | Stage neutro (vitrine showcase) |
| `--t-stage-warm` | `#EDE7D2` | Stage quente (vitrine showcase) |
| `--t-stage-dark` | `#1B201E` | Stage escuro (vitrine showcase) |
| `--t-stage-radius` | `28px` | Raio do stage (vitrine showcase) |

**Fontes:** IBM Plex Sans (display) + Satoshi (corpo) via CDN

---

## Arquitetura de componentes

### Ordem das seções em `app.jsx` (home)
1. Nav
2. Hero (carousel 3 slides)
3. Marquee (ticker de benefícios)
4. About
5. SocialProof (stats + depoimentos)
6. Products (cards das 3 escovas → link para páginas individuais)
7. Compare (tabela Painel Clean vs concorrente)
8. ROI (calculadora de perda por sujeira)
9. Training (CTA → /curso)
10. ReelsSection (3 Reels do Instagram via embed.js)
11. Platform (plataforma de serviços)
12. FAQ
13. CtaFinal
14. Footer

### Página Escova Dupla PRO (`escova-dupla-d5-app.jsx`) — cinematic
Página scroll-driven independente (sem `ProductPage.jsx`):
1. `Hero` — 1100vh desktop / 760vh mobile; 11 frames WebP (`escova-pro-hero-N.webp`) + 4 captions posicionadas
2. `Exploded` — 720vh; 4 estágios WebP (`escova-pro-N.webp`) com crossfade e painéis laterais sticky
3. `FieldStats` — 220vh; bg field-1.jpg, 4 contadores count-up
4. `Specs` — ficha técnica 8 linhas com tally scroll-driven
5. `Timeline` — grade 6×4 painéis com preenchimento progressivo
6. `AccessoriesD5` — 6 cards com SVG glyphs inline
7. `FAQSection` — accordion 6 itens
8. `FinalCTAD5` — fullscreen, WhatsApp + Mercado Livre (`React.forwardRef`)
9. `PurchaseBar` — sticky, aparece só depois do hero, auto-hide ao chegar no CTA final

**Hero (arquitetura da animação):** um único `requestAnimationFrame` lê o scroll, suaviza o
progresso com lerp (0.18; sem suavização com `prefers-reduced-motion`) e escreve
`opacity`/`transform` direto nos nós via ref — sem `setState` por evento de scroll.
Frames pré-carregados com `new Image()`. Dissolves curtos (30% do segmento) + um único
zoom contínuo na pilha (scale 1 → 1.06) — nunca escala por frame (evita "pulso").
Um véu cream (`.d5-veil`, opacity 0.55 → 0) cobre o frame 1 durante a abertura
tipográfica — nunca há tela vazia entre o título e os frames.

Hooks locais: `useScrollY()`, `useSectionProgress(ref, mode)` — não dependem de `_config.jsx`.
`mode` aceita: `'sticky'` (seção tall), `'enter'` (entra pela base), `'through'` (passa pelo viewport).

### Páginas de produto G5 e S5 (`*-app.jsx`)
Ainda usam a estrutura anterior com `ProductPage.jsx`:
1. StickyBuyBar (aparece após scroll de 520px)
2. ProductHero (breadcrumb, badge SKU, headlines, quick spec pills, 2 CTAs, imagem)
3. SpecsSection (ficha técnica 6 cards)
4. BenefitsSection (3 cards de vantagem)
5. AccessoriesSection (acessórios compatíveis)
6. MiniCompare (tabela 3 modelos, produto atual destacado)
7. TestimonialSection
8. CtaFinalSection
9. ProductNav (← anterior / próximo →)

### `_config.jsx` — exports globais
- `TweaksCtx` + `useT()` — contexto de tweaks
- `TWEAK_DEFAULTS` — valores padrão
- `Icon` — sistema de ícones inline SVG (substitui Lucide)
- `LogoMark` — ícone SVG inline (green bg + 9 formas geométricas escuras); substitui JPEG serrilhado
- `Logo` — `LogoMark` + texto "Painel Clean", com link para `/`; aceita prop `textColor`
- `wa(msg)` — helper para link WhatsApp com mensagem pré-preenchida
- `WhatsBrand` — ícone SVG do WhatsApp
- `Reveal`, `useReveal`, `useRevealChildren`, `useCountUp` — hooks de animação de entrada

### `Nav.jsx` — dropdown de produtos
- `prodLinks` array: Escova Dupla PRO → `/escova-dupla-d5`, Escovas → `/produtos`, Acessórios → `/produtos#acessorios`
- Desktop: item "Produtos" com chevron, hover abre painel dropdown
- Mobile: "Produtos" abre accordion com `prodMobileOpen` state

### `produtos-app.jsx` — nova vitrine (redesign)
Seções: `VHero` → 3× `ShowcaseSection` (PRO, S5, G5, com `KitSection` após PRO) → `AccessoriesSection` → `VFinalCTA` + `SectionNav` flutuante
- `PRODUCTS`: PRO (260/h), S5 (160/h), G5 (200/h)
- `ACCESSORIES`: 6 itens com SVG glyphs
- CSS prefixes: `vh-` (vitrine hero), `vp-` (showcase), `vk-` (kit), `vsn-` (section nav), `va-` (accessories), `vf-` (final CTA)

### Sistema de tweaks (dev only)
Painel flutuante ativado com `?tweaks=1` na URL.

---

## Testes (Playwright)

- **Runner:** Playwright v1.56.1 global em `/opt/node22/lib/node_modules/playwright`
- **Executar:** `NODE_PATH=/opt/node22/lib/node_modules npx playwright test`
- **Servidor local:** `npx serve . --listen 8787` (necessário para clean URLs; Python http.server não serve `/curso` corretamente)
- **CDN mock:** `tests/fixtures.js` intercepta unpkg/babel/react-dom com cópias locais em `/tmp/react-deps/` — necessário porque CDNs externos retornam 403 no ambiente
- **Dependências locais:** instalar uma vez com `cd /tmp && mkdir react-deps && cd react-deps && npm init -y && npm install react@18.3.1 react-dom@18.3.1 @babel/standalone@7.29.0`
- **Projetos:** `desktop-chrome` (1280×720) e `mobile-chrome` (Pixel 5, 393×851)
- **120 testes** cobrindo todas as 6 páginas em 2 viewports
- Locators: usar `.filter({ visible: true })` quando o primeiro match do DOM pode estar num
  menu/drawer fechado (links da Nav mobile ficam no DOM com `display:none`)

---

## Convenções

- **CSS:** variáveis do `tokens.css` para cores e tipografia; inline styles com objetos JS
- **Ícones:** sempre usar `<Icon name="..." />` — nunca importar Lucide diretamente
- **WhatsApp:** sempre usar `wa("mensagem")` — nunca hardcodar número
- **Imagens:** salvar em `public/images/` e referenciar como `public/images/nome.jpg`
- **Logo:** usar `<Logo />` (SVG inline) — nunca referenciar `public/images/logo-real.jpg`
- **Tags de produto:** usar apenas `var(--pc-dark)` ou `var(--pc-green)` — nunca cores off-brand (amber, azul)
- **Redes sociais:** `/painelclean` em todas as plataformas

---

## Deploy

A Vercel serve o repo como site estático — sem build, sem Next.js.

```json
{
  "version": 2,
  "framework": null,
  "buildCommand": null,
  "installCommand": null,
  "outputDirectory": ".",
  "cleanUrls": true,
  "trailingSlash": false
}
```

**Nunca criar `package.json` na raiz** — vai acionar o builder Node.js e quebrar o deploy.

Para commitar sem assinatura GPG (ambiente atual):
```
git -c commit.gpgsign=false commit -m "mensagem"
```

**Regra de deploy (permanente):** ao terminar qualquer mudança, sempre:
1. Commitar na branch de trabalho
2. Fazer cherry-pick / checkout para `main` e push: `git push -u origin main`
3. A Vercel faz deploy automático a partir de pushes na `main` — não precisa de ação manual

---

## Histórico de decisões

- **Sem Next.js:** HTML+JSX com Babel in-browser é suficiente para site estático institucional
- **Sem build:** simplicidade de deploy; Babel CDN cobre o volume de código atual
- **Páginas independentes por produto:** cada `.html` carrega seu próprio `-app.jsx` — sem router, sem estado compartilhado entre páginas
- **Tweaks panel:** mantido para iterações de design com o cliente (ativar com `?tweaks=1`)
- **Hero layout (PR #4):** imagem `position: absolute; left: 50%; right: 0` do viewport — bleed da metade da tela até a borda direita sem cropar. Texto dentro de `.container` com `width: 50%`, alinhado à grid das outras seções
- **Nav hamburger (PR #4):** `.nav-mobile` usa `display: open ? "flex" : "none"` como inline style, não classe CSS — necessário porque `!important` em CSS sobreescreveria o estado React
- **Logo SVG (PR #5):** `LogoMark` é SVG inline com `viewBox="0 0 100 100"` — nenhum arquivo de imagem, nenhum artefato de compressão JPEG, escala perfeita em qualquer DPI
- **Escova Dupla PRO (vitrine + D5 cinematic):** nome de marketing mudou de "Escova Dupla D5" para "Escova Dupla PRO". URL e SKU permanecem. PRO é agora a mais rápida (260/h); G5 passou para 200/h.
- **D5 página cinematic:** auto-contida em `escova-dupla-d5-app.jsx` — não usa `ProductPage.jsx`. Hooks de scroll declarados localmente (não em `_config.jsx`) para evitar dependência cruzada.
- **Vitrine `/produtos`:** redesign completo em `produtos-app.jsx` — showcase por produto com stage colorido, kit interativo, acessórios com glyphs SVG e section nav flutuante.
