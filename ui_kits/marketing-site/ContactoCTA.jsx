/* ContactoCTA — closing call to action */
function ContactoCTA() {
  return (
    <section id="contacto">
      <div className="container">
        <div className="cta-block">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2 style={{ marginTop: 14 }}>¿Necesita una inspección o una segunda opinión técnica?</h2>
            <p>Escríbanos describiendo el caso. Le respondemos en horas hábiles con un primer diagnóstico y plazo estimado.</p>
          </div>
          <div className="actions">
            <a className="btn btn-primary btn-lg" href="#"><i data-lucide="mail"></i> Escribir al estudio</a>
            <a className="btn btn-secondary btn-lg" href="#"><i data-lucide="phone"></i> +54 11 0000-0000</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ContactoCTA = ContactoCTA;
