# TODO.md — painel-clean-site

> Atualizado em: maio/2026

---

## 🔴 Prioridade alta (antes do lançamento)

### Conteúdo real
- [ ] Substituir fotos dos produtos por fotos reais (G5, D5, S5) em `public/images/`
- [ ] Substituir depoimentos placeholder em `SocialProof.jsx` e nas páginas de produto
- [ ] Confirmar nome e detalhes do acessório ZCP-APPA02 (atualmente "Acessório ZCP-APPA02")
- [ ] Confirmar preços e especificações técnicas com o time
- [ ] Confirmar número de WhatsApp em `_config.jsx` (`WHATSAPP = "5547996785953"`)
- [ ] Verificar links das redes sociais (Instagram, Facebook, LinkedIn, YouTube)

### Mobile
- [ ] Testar todas as páginas no mobile: `/`, `/curso`, `/produtos`, `/escova-rotativa-g5`, `/escova-dupla-d5`, `/escova-solo-s5`
- [ ] Verificar sticky buy bar nas páginas de produto no mobile
- [ ] Checar calculadora ROI no mobile

### SEO / Infra
- [ ] Adicionar favicon real da Painel Clean
- [ ] Configurar domínio customizado `painelclean.com.br` na Vercel

---

## 🟡 Melhorias de design / UX

- [ ] **Calculadora ROI:** no desktop está muito grande — reduzir padding e fonte do valor anual
- [ ] **Footer:** confirmar que "Atendimento · Seg–Sex 8h–18h" não quebra em nenhum breakpoint
- [ ] **Produtos `/produtos`:** adicionar imagens reais nos cards de acessórios (atualmente ícone genérico)
- [ ] Revisar todos os títulos para garantir quebras de linha intencionais
- [ ] Remover TweaksPanel do bundle de produção (ou manter apenas atrás de `?tweaks=1`)

---

## 🟢 Backlog (pós-lançamento)

- [ ] Google Analytics / pixel Meta
- [ ] Integração com formulário de contato (Formspree ou similar)
- [ ] Blog / conteúdo SEO sobre limpeza de painéis solares
- [ ] YouTube Shorts API — integrar vídeos reais na seção de conteúdo
- [ ] Animação "painel sujo vs limpo" no hero (cortada do MVP)
- [ ] Conectar calculadora ROI com dados reais de inversores via API
- [ ] Versão em inglês (expansão futura)

---

## ✅ Concluído

- [x] Design v3 gerado no Claude Design e exportado como HTML
- [x] Implementação de todos os componentes da home (Nav, Hero, Marquee, About, SocialProof, Products, Compare, ROI, Training, ReelsSection, Platform, FAQ, CtaFinal, Footer)
- [x] Sistema de ícones inline SVG (`Icon` em `_config.jsx`)
- [x] TweaksPanel para iteração de design
- [x] Remoção do Next.js — migração para site estático puro
- [x] `vercel.json` configurado para deploy estático sem build
- [x] Push para main + deploy na Vercel funcionando
- [x] Logo linkando para `/` (não `#`)
- [x] Fix hero mobile — imagem empilhada e visível
- [x] Fix footer mobile — "Atendimento" sem quebra de linha
- [x] Melhoria responsiva dos cards de produto
- [x] Calculadora ROI reduzida no desktop
- [x] Tags de produto com cor/ícone por modelo (âmbar G5, azul S5)
- [x] Página `/curso` — landing completa do treinamento (hero, módulos, calculadora, depoimentos, CTA)
- [x] Nav com links: Produtos, Comparativo, Treinamento, Curso, Plataforma, Calculadora
- [x] OG/Twitter meta tags em `index.html` e `curso.html`
- [x] Instagram Reels embed (3 reels reais via embed.js oficial)
- [x] Página `/produtos` — catálogo com filter tabs e grid de acessórios
- [x] Páginas individuais: `/escova-rotativa-g5`, `/escova-dupla-d5`, `/escova-solo-s5`
- [x] Sticky buy bar, breadcrumb, mini compare, navegação prev/next em cada produto
