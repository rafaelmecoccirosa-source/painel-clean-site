# TODO.md — painel-clean-site

> Atualizado em: maio/2026

---

## 🔴 Prioridade alta (antes do lançamento)

### Mobile
- [ ] Revisar hero mobile após último deploy — confirmar que foto do técnico aparece
- [ ] Testar calculadora ROI no mobile — bloco deve ficar completamente visível
- [ ] Revisar cards de produto no mobile (layout 1-col em telas < 580px)
- [ ] Checar quebras de texto em toda a página no mobile

### Conteúdo real
- [ ] Substituir fotos placeholder dos produtos por fotos reais das escovas (Rotativa G5, Dupla D5, Solo S5)
- [ ] Substituir depoimentos placeholder (SocialProof) por depoimentos reais de clientes
- [ ] Confirmar preços e especificações técnicas dos produtos com o time
- [ ] Confirmar número de WhatsApp no `wa()` helper em `_config.jsx`
- [ ] Verificar se links das redes sociais estão corretos (Instagram, Facebook, LinkedIn → `/painelclean`)

### SEO / Meta
- [ ] Adicionar `<meta>` tags no `index.html`: description, og:image, og:title
- [ ] Adicionar favicon real da Painel Clean
- [ ] Definir domínio customizado na Vercel (painelclean.com.br)

---

## 🟡 Melhorias de design / UX

### Seções
- [ ] **Treinamento:** revisar organização do bloco — separar curso de "incluso no treinamento" de forma mais clara
- [ ] **Produtos:** melhorar legibilidade da tag "Limpeza Pesada" — cor ou ícone mais evidente
- [ ] **Calculadora ROI:** no desktop está muito grande — reduzir padding e fonte do valor anual
- [ ] **Footer:** confirmar que "Atendimento · Seg–Sex 8h–18h" não quebra em nenhum breakpoint

### Geral
- [ ] Revisar todos os títulos para garantir quebras de linha intencionais (sem `<br>` acidentais)
- [ ] Checar espaçamentos entre seções no mobile (padding/gap consistentes)
- [ ] Remover TweaksPanel do bundle de produção (ou esconder atrás de `?tweaks=1`)

---

## 🟢 Backlog (pós-lançamento)

- [ ] Adicionar Google Analytics / pixel Meta
- [ ] Página de produto individual (detalhes técnicos, fotos em alta, ficha técnica PDF)
- [ ] Integração com formulário de contato (Formspree ou similar)
- [ ] Blog / conteúdo SEO sobre limpeza de painéis solares
- [ ] Versão em inglês (expansão futura)
- [ ] Animação "painel sujo vs limpo" no hero (foi cortada do MVP por falta de validação de tráfego)
- [ ] Conectar calculadora ROI com dados reais de inversores via API

---

## ✅ Concluído

- [x] Design v3 gerado no Claude Design e exportado como HTML
- [x] Implementação de todos os 13 componentes (Nav, Hero, Marquee, SocialProof, Products, Compare, ROI, Training, Platform, FAQ, CtaFinal, Footer)
- [x] Sistema de ícones inline SVG (`Icon` component em `_config.jsx`)
- [x] TweaksPanel para iteração de design
- [x] Remoção do Next.js — migração para site estático puro
- [x] `vercel.json` configurado para deploy estático
- [x] Push para main + deploy na Vercel funcionando
- [x] Ícones de redes sociais (Instagram, Facebook, LinkedIn) no footer
- [x] Fix hero mobile — imagem empilhada e visível
- [x] Fix footer — "Atendimento" sem quebra de linha
- [x] Melhoria responsiva dos cards de produto
- [x] Calculadora ROI reduzida no desktop
