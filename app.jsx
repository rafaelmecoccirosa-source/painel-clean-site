function App() {
  useLenis();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Magnetic hover on primary CTAs — the button drifts toward the cursor (max ±6px).
  // Delegated so it also covers buttons that re-render (e.g. hero slides).
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const MAX = 6;
    const clamp = v => Math.max(-MAX, Math.min(MAX, v));
    const onMove = e => {
      const btn = e.target.closest && e.target.closest(".btn-primary");
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const x = clamp((e.clientX - (r.left + r.width / 2)) * 0.15);
      const y = clamp((e.clientY - (r.top + r.height / 2)) * 0.15);
      btn.style.transition = "transform 120ms ease";
      btn.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onOut = e => {
      const btn = e.target.closest && e.target.closest(".btn-primary");
      if (!btn) return;
      if (e.relatedTarget && btn.contains(e.relatedTarget)) return;
      btn.style.transition = "transform 300ms ease";
      btn.style.transform = "translate(0, 0)";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);
  return (
    <TweaksCtx.Provider value={t}>
      <Nav />
      <Hero />
      {t.showMarquee && <Marquee />}
      <About />
      <Applications />
      {t.showSocial && <SocialProof />}
      <Products />
      <ReelsSection />
      {t.showCompare && <Compare />}
      {t.showROI && <ROI />}
      <Training />
      <Platform />
      <Faq />
      <CtaFinal />
      <Footer />
      <TweaksPanel title="Tweaks · Painel Clean">
        <TweakSection label="Hero">
          <TweakSelect label="Estilo do hero" value={t.heroTreatment}
            onChange={v => setTweak('heroTreatment', v)}
            options={[
              { value: "gradient", label: "Gradiente padrão" },
              { value: "split",    label: "Split sólido (sem véu)" },
              { value: "minimal",  label: "Mínimo (mais foto)" },
              { value: "duotone",  label: "Duotone verde" },
              { value: "dotted",   label: "Tela pontilhada" },
            ]} />
          <TweakColor label="Cor de destaque" value={t.heroAccent}
            onChange={v => setTweak('heroAccent', v)}
            options={["#3AD580", "#F4B83A", "#FF8C5A", "#5BA8FF", "#C56BFF"]} />
        </TweakSection>
        <TweakSection label="Treinamento">
          <TweakRadio label="Detalhamento" value={t.trainingDetail}
            onChange={v => setTweak('trainingDetail', v)}
            options={[{ value: "compact", label: "Compacto" }, { value: "expanded", label: "Módulos" }]} />
        </TweakSection>
        <TweakSection label="Seções visíveis">
          <TweakToggle label="Marquee"      value={t.showMarquee}  onChange={v => setTweak('showMarquee', v)} />
          <TweakToggle label="Prova social" value={t.showSocial}   onChange={v => setTweak('showSocial', v)} />
          <TweakToggle label="Comparativo"  value={t.showCompare}  onChange={v => setTweak('showCompare', v)} />
          <TweakToggle label="Calc. de ROI" value={t.showROI}      onChange={v => setTweak('showROI', v)} />
        </TweakSection>
        <TweakSection label="Movimento">
          <TweakSlider label="Marquee (s)" value={t.marqueeSpeed} min={15} max={80} step={1}
            onChange={v => setTweak('marqueeSpeed', v)} />
        </TweakSection>
      </TweaksPanel>
    </TweaksCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
