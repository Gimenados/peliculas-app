import React, { useState } from "react";
import formImage from "../assets/png/image19.webp"; // Asegurate que la ruta sea correcta

export default function FormMovie({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !imgSrc || !description || !year) {
      alert("Todos los campos obligatorios deben estar completos.");
      return;
    }

    if (parseInt(year) < 1800 || parseInt(year) > new Date().getFullYear()) {
      alert("Por favor, ingresa un año válido.");
      return;
    }

    const newMovie = {
      title,
      imgSrc,
      description,
      year: parseInt(year, 10),
      buttonTrailer: trailerUrl,
      imgModal: imgSrc,
    };

    onAddMovie(newMovie);

    setTitle("");
    setImgSrc("");
    setDescription("");
    setYear("");
    setTrailerUrl("");
  };

  return (
    <section className="formMovie">
      <div>
        <img src={formImage} alt="Formulario película" className="form-image" />
      </div>
      <form id="formMovie" onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" placeholder="Ingrese el título" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label htmlFor="imgSrcInput">URL de la imagen</label>
        <input type="text" id="imgSrcInput" placeholder="URL de la imagen" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} required />

        <label htmlFor="description">Descripción</label>
        <textarea id="description" placeholder="Ingrese la descripción" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <label htmlFor="year">Año</label>
        <input type="number" id="year" placeholder="Ingrese el año" value={year} onChange={(e) => setYear(e.target.value)} required />

        <label htmlFor="trailerUrl">URL del tráiler (opcional)</label>
        <input type="text" id="trailerUrl" placeholder="URL del tráiler" value={trailerUrl} onChange={(e) => setTrailerUrl(e.target.value)} />

        <button type="submit" className="form-button">
          Agregar Película
        </button>
      </form>
    </section>
  );
}

