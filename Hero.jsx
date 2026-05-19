/* Hero — eyebrow, headline, lead, CTAs, KPI strip */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Liquidación de siniestros · Análisis de riesgo</span>
            <h1>Criterio técnico al servicio de su cartera de siniestros.</h1>
            <p className="lead">
              Asesoramos a compañías de seguros, brokers y empresas en la gestión integral de
              siniestros e inspecciones técnicas, con cobertura en todo el territorio argentino
              y un equipo interdisciplinario de profesionales matriculados.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary btn-lg" href="#contacto">Solicitar inspección</a>
              <a className="btn btn-secondary btn-lg" href="#servicios">Ver servicios</a>
            </div>
          </div>
          <div className="hero-image" aria-label="Imagen de cabecera (placeholder)">
            <div className="ph">
              <i data-lucide="image" />
              <span>1080 × 1350 · Imagen documental fría</span>
            </div>
          </div>
        </div>
        <div className="kpis">
          <div className="kpi"><div className="n">+25</div><div className="l">años en el mercado asegurador</div></div>
          <div className="kpi"><div className="n">24</div><div className="l">jurisdicciones cubiertas</div></div>
          <div className="kpi"><div className="n">+180</div><div className="l">inspectores en red federal</div></div>
          <div className="kpi"><div className="n">48 hs</div><div className="l">tiempo medio de respuesta</div></div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
