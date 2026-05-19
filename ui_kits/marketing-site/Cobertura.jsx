/* Cobertura — nationwide coverage block on dark surface */
function Cobertura() {
  const provincias = [
    "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba",
    "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja",
    "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan",
    "San Luis", "Santa Cruz", "Santa Fe", "Sgo. del Estero", "T. del Fuego", "Tucumán",
  ];
  return (
    <section id="cobertura" className="cob">
      <div className="container">
        <div className="cob-grid">
          <div>
            <span className="eyebrow">Cobertura nacional</span>
            <h2 style={{ marginTop: 16, marginBottom: 20 }}>Red federal de inspectores en las 23 provincias y CABA.</h2>
            <p style={{ marginBottom: 32, fontSize: 17, lineHeight: 1.55 }}>
              Coordinamos relevamientos en cualquier punto del país desde una única central operativa.
              Los inspectores son matriculados locales con conocimiento del contexto regional.
            </p>
            <div className="cob-stats">
              <div className="cob-stat"><div className="n">24</div><div className="l">jurisdicciones</div></div>
              <div className="cob-stat"><div className="n">+180</div><div className="l">inspectores</div></div>
              <div className="cob-stat"><div className="n">9</div><div className="l">oficinas regionales</div></div>
              <div className="cob-stat"><div className="n">48 hs</div><div className="l">SLA inspección urgente</div></div>
            </div>
          </div>
          <div className="cob-map">
            <h4>Provincias cubiertas</h4>
            <div className="prov-list">
              {provincias.map((p) => <span key={p}>{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Cobertura = Cobertura;
