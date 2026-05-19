/* Equipo — interdisciplinary team intro with placeholder portraits */
function Equipo() {
  const people = [
    { name: "Dr. M. Bacigalupo", role: "Socio fundador · Liquidador matriculado" },
    { name: "Ing. L. Sosa", role: "Coordinación técnica · Riesgos patrimoniales" },
    { name: "Dra. C. Méndez", role: "Asesoría legal · Mediaciones y pericias" },
    { name: "Cdor. R. Vilar", role: "Análisis financiero · Carteras corporativas" },
  ];
  return (
    <section id="equipo">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Equipo interdisciplinario</span>
          <h2>Profesionales matriculados de distintas disciplinas.</h2>
          <p>Ingeniería, derecho, contabilidad y peritaje técnico bajo una misma metodología de trabajo.</p>
        </div>
        <div className="team-grid">
          {people.map((p) => (
            <div key={p.name} className="team-card">
              <div className="portrait" aria-label="Retrato (placeholder)"><i data-lucide="user-round"></i></div>
              <div className="name">{p.name}</div>
              <div className="role">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Equipo = Equipo;
