/* App — page composition */
function App() {
  const [active, setActive] = React.useState("inicio");

  const onNavigate = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <React.Fragment>
      <Header active={active} onNavigate={onNavigate} />
      <main>
        <Hero />
        <Servicios />
        <Cobertura />
        <Proceso />
        <Equipo />
        <ContactoCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}
window.App = App;
