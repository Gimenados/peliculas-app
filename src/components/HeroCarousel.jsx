import React from "react";
import slide1 from "../assets/png/fondo2.jpg";
import slide2 from "../assets/png/fondo3.jpg";
import slide3 from "../assets/png/fondo4.jpg";

export default function HeroCarousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Primera diapositiva" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Bienvenidos a tu lista de películas</h5>
            <p>Explorá, agregá y descubrí nuevas historias.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Segunda diapositiva" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Organizá tu colección</h5>
            <p>Filtrá por año, nombre o género y mantené todo en orden.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Tercera diapositiva" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sumá tus favoritas</h5>
            <p>Cargá nuevas películas fácilmente con nuestro formulario.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
