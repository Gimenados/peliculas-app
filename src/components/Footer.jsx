// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PelículasApp. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
