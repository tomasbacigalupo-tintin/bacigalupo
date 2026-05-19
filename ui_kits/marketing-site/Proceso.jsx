/* Proceso — five-step process strip */
function Proceso() {
  const steps = [
    { n: "01", t: "Asignación", d: "Recepción del expediente y asignación al liquidador con perfil técnico adecuado." },
    { n: "02", t: "Inspección", d: "Relevamiento de campo con informe fotográfico georreferenciado." },
    { n: "03", t: "Análisis", d: "Cuantificación de daños y verificación de cobertura contra póliza." },
    { n: "04", t: "Dictamen", d: "Informe técnico con conclusiones y respaldo documental completo." },
    { n: "05", t: "Cierre", d: "Liquidación, gestión de pago y archivo del expediente." },
  ];
  return (
    <section id="proceso" style={{ background: "var(--neutral-50)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>Cinco etapas, un único responsable.</h2>
          <p>Cada expediente avanza con un liquidador asignado y trazabilidad documental punta a punta.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <div className="n">PASO {s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proceso = Proceso;
