import React from "react";
import claquetaImg from "../assets/png/claqueta.png";

export default function Header() {
  return (
    <header>
      <div className="containerImg">
        <img src={claquetaImg} alt="Claqueta" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#movie-list">Listado de Películas</a></li>
          <li><a href="#agregarPelicula">Agregar Película</a></li>
        </ul>
      </nav>
    </header>
  );
}

