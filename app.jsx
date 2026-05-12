function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <TweaksCtx.Provider value={t}>
      <Nav />
      <Hero />
      {t.showMarquee && <Marquee />}
      <About />
      {t.showSocial && <SocialProof />}
      <Products />
      {t.showCompare && <Compare />}
      {t.showROI && <ROI />}
      <Training />
      <YouTubeSection />
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
