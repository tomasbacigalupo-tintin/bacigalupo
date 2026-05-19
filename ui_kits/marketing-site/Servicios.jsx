/* Servicios — four service cards */
function Servicios() {
  const services = [
    {
      icon: "clipboard-list",
      title: "Liquidación de siniestros",
      body: "Gestión completa del expediente: denuncia, valuación, dictamen técnico y cierre, con respaldo documental en cada etapa.",
    },
    {
      icon: "search",
      title: "Inspecciones técnicas",
      body: "Relevamientos de campo en todo el país, con informes fotográficos, cuantificación de daños y reconstrucción de hechos.",
    },
    {
      icon: "shield-check",
      title: "Análisis de riesgo",
      body: "Evaluación de cúmulos y exposición patrimonial para suscripción, renovación o redistribución de carteras.",
    },
    {
      icon: "briefcase",
      title: "Asesoramiento especializado",
      body: "Soporte técnico en peritajes, mediaciones y juicios. Capacitación a equipos internos de aseguradoras y brokers.",
    },
  ];
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Soluciones técnicas para todo el ciclo del siniestro.</h2>
          <p>Cuatro líneas de trabajo coordinadas por un único equipo, con un punto de contacto por expediente.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <article key={s.icon} className="svc-card">
              <div className="icon"><i data-lucide={s.icon}></i></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="more">Conocer más <i data-lucide="arrow-right"></i></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Servicios = Servicios;
