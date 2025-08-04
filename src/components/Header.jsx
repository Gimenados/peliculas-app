import React from "react";
import claquetaImg from "../assets/png/claqueta.png";

export default function Header() {
  return (
   <header className="d-flex align-items-center justify-content-between">
  <nav className="navbar navbar-expand-lg custom-navbar w-100">
    <div className="container-fluid">
      
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={claquetaImg} alt="Claqueta" />
      </a>

      {/* Botón hamburguesa */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menú colapsado */}
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#movie-list">
              Listado de Películas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#agregarPelicula">
              Agregar Película
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  );
}
