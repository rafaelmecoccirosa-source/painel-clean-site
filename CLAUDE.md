# CLAUDE.md — painel-clean-site

> Fonte de verdade para o site institucional da Painel Clean (painelclean.com.br).
> Atualizado em: maio/2026

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
| Escova Rotativa G5 | ZCP-0175-G5 | 260 painéis/h |
| Escova Dupla D5 | ZCP-0275-D5 | 200 painéis/h |
| Escova Solo S5 | ZCP-0175-S5 | 160 painéis/h |

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

### Páginas de produto individuais (`*-app.jsx`)
Cada página usa as mesmas seções, com dados por produto em `PRODUCT`:
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
- `Logo` — logo com link para `/`
- `wa(msg)` — helper para link WhatsApp com mensagem pré-preenchida
- `WhatsBrand` — ícone SVG do WhatsApp

### Sistema de tweaks (dev only)
Painel flutuante ativado com `?tweaks=1` na URL.

---

## Convenções

- **CSS:** variáveis do `tokens.css` para cores e tipografia; inline styles com objetos JS
- **Ícones:** sempre usar `<Icon name="..." />` — nunca importar Lucide diretamente
- **WhatsApp:** sempre usar `wa("mensagem")` — nunca hardcodar número
- **Imagens:** salvar em `public/images/` e referenciar como `public/images/nome.jpg`
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

---

## Histórico de decisões

- **Sem Next.js:** HTML+JSX com Babel in-browser é suficiente para site estático institucional
- **Sem build:** simplicidade de deploy; Babel CDN cobre o volume de código atual
- **Páginas independentes por produto:** cada `.html` carrega seu próprio `-app.jsx` — sem router, sem estado compartilhado entre páginas
- **Tweaks panel:** mantido para iterações de design com o cliente (ativar com `?tweaks=1`)
