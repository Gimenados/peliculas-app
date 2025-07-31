import React, { useState } from "react";

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
      
      <form id="formMovie" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Ingrese el título" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <input type="text" id="imgSrcInput" placeholder="URL de la imagen" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} required />

        <textarea id="description" placeholder="Ingrese la descripción" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <input type="number" id="year" placeholder="Ingrese el año" value={year} onChange={(e) => setYear(e.target.value)} required />

        <input type="text" id="trailerUrl" placeholder="URL del tráiler" value={trailerUrl} onChange={(e) => setTrailerUrl(e.target.value)} />

        <button type="submit" className="form-button">
          Agregar Película
        </button>
      </form>
    </section>
  );
}

