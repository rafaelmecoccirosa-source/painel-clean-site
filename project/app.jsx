function App() {
  // Re-init lucide icons when DOM updates
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div>
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <Training />
      <Platform />
      <Faq />
      <CtaFinal />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
