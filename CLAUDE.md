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
├── index.html              # Ponto de entrada — carrega React, Babel e os componentes
├── app.jsx                 # Root do app — TweaksCtx.Provider + ordem das seções
├── tweaks-panel.jsx        # Painel de tweaks (dev only) — useTweaks, TweaksPanel
├── vercel.json             # Config Vercel — serving estático, sem build
├── public/
│   ├── tokens.css          # Design tokens (cores, tipografia, espaçamentos)
│   └── [imagens]           # Fotos dos produtos, técnicos, hero
└── components/
    ├── _config.jsx         # Globals compartilhados: TweaksCtx, Icon, Logo, wa()
    ├── Nav.jsx
    ├── Hero.jsx
    ├── Marquee.jsx
    ├── SocialProof.jsx     # Stats + depoimentos
    ├── Products.jsx
    ├── Compare.jsx         # Tabela comparativa 11 linhas
    ├── ROI.jsx             # Calculadora interativa de ROI
    ├── Training.jsx        # Seção de treinamento/curso
    ├── Platform.jsx        # Seção da plataforma de serviços
    ├── Faq.jsx
    ├── CtaFinal.jsx
    └── Footer.jsx
```

---

## Design tokens (cores principais)

| Token         | Valor     | Uso                        |
|---------------|-----------|----------------------------|
| `--c-dark`    | `#0F382B` | Fundo escuro, hero          |
| `--c-brand`   | `#3AD580` | Verde vibrante, CTAs        |
| `--c-mid`     | `#1B3A2D` | Seções escuras intermediárias |
| `--c-cream`   | `#FFFBEC` | Fundo claro                 |
| `--c-mint`    | `#BDF1D5` | Destaque suave              |

**Fontes:** IBM Plex Sans (títulos) + Satoshi (corpo) via CDN

---

## Arquitetura de componentes

### Ordem das seções em `app.jsx`
1. Nav
2. Hero (carousel com 3 slides)
3. Marquee (ticker de benefícios)
4. SocialProof (stats + depoimentos)
5. Products (3 escovas: Rotativa G5, Dupla D5, Solo S5)
6. Compare (tabela Painel Clean vs concorrente)
7. ROI (calculadora de perda por sujeira)
8. Training (curso + certificação)
9. Platform (plataforma de serviços/assinaturas)
10. FAQ
11. CtaFinal
12. Footer

### `_config.jsx` — exports globais
- `TweaksCtx` + `useT()` — contexto de tweaks
- `TWEAK_DEFAULTS` — valores padrão dos tweaks
- `Icon` — sistema de ícones inline SVG (substitui Lucide)
- `Logo` — logo da marca com imagem real do brandbook
- `wa(msg)` — helper para link WhatsApp com mensagem pré-preenchida

### Sistema de tweaks (dev only)
Painel flutuante ativado com `?tweaks=1` na URL. Permite ajustar em tempo real:
- Estilo do hero (overlay escuro / gradiente / sem overlay)
- Cor de acento
- Nível de detalhe do treinamento
- Visibilidade de seções
- Velocidade do marquee

---

## Convenções

- **CSS:** variáveis do `tokens.css` para cores e tipografia; inline styles com objetos JS nos componentes
- **Ícones:** sempre usar o componente `<Icon name="..." />` — nunca importar Lucide diretamente
- **WhatsApp:** sempre usar `wa("mensagem")` para gerar links — nunca hardcodar número
- **Imagens:** salvar em `public/` e referenciar como `/nome-do-arquivo.jpg`
- **Redes sociais:** `/painelclean` em todas as plataformas (Instagram, Facebook, LinkedIn)

---

## Deploy

A Vercel detecta o `vercel.json` e serve como site estático — sem build, sem Next.js.

```json
{
  "version": 2,
  "builds": [{ "src": "index.html", "use": "@vercel/static" }],
  "routes": [{ "src": "/(.*)", "dest": "/$1" }]
}
```

**Não existe `package.json` na raiz** — qualquer arquivo `package.json` vai acionar o builder do Node.js e quebrar o deploy.

---

## Histórico de decisões

- **Sem Next.js:** o design foi gerado pelo Claude Design como HTML+JSX com Babel — convertido para Next.js criaria complexidade desnecessária para um site estático institucional
- **Sem build:** Babel in-browser via CDN é suficiente para esse volume de código; simplifica o deploy
- **Tweaks panel:** mantido apenas para facilitar iterações de design com o cliente antes do lançamento final
