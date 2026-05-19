/* Footer — dark slate footer */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand-block">
            <img src="../../assets/logo-primary.png" alt="Estudio Bacigalupo &amp; Asociados" />
            <p>Liquidación de siniestros y análisis de riesgo para el sector asegurador y empresarial argentino.</p>
          </div>
          <div>
            <h5>Servicios</h5>
            <ul>
              <li><a href="#">Liquidación</a></li>
              <li><a href="#">Inspecciones</a></li>
              <li><a href="#">Análisis de riesgo</a></li>
              <li><a href="#">Asesoramiento</a></li>
            </ul>
          </div>
          <div>
            <h5>Estudio</h5>
            <ul>
              <li><a href="#">Equipo</a></li>
              <li><a href="#">Cobertura</a></li>
              <li><a href="#">Casos</a></li>
              <li><a href="#">Prensa</a></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <ul>
              <li>Av. Corrientes 0000, CABA</li>
              <li>+54 11 0000-0000</li>
              <li>contacto@bacigalupo.com.ar</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Estudio Bacigalupo &amp; Asociados. Todos los derechos reservados.</span>
          <span>CABA · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
