/* Header — fixed nav with brand + primary nav + CTA */
function Header({ active = "inicio", onNavigate }) {
  const links = [
    ["inicio", "Inicio"],
    ["servicios", "Servicios"],
    ["cobertura", "Cobertura"],
    ["proceso", "Proceso"],
    ["equipo", "Equipo"],
    ["contacto", "Contacto"],
  ];
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={(e) => { e.preventDefault(); onNavigate?.("inicio"); }}>
          <img src="../../assets/logo-primary.png" alt="Estudio Bacigalupo &amp; Asociados" />
        </a>
        <nav>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); onNavigate?.(id); }}
            >{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary" href="#contacto" onClick={(e) => { e.preventDefault(); onNavigate?.("contacto"); }}>
          Solicitar inspección
        </a>
      </div>
    </header>
  );
}
window.Header = Header;
