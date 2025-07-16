import React, { useState } from "react";

export default function FormMovie({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !imgSrc || !description || !year) {
      alert("Todos los campos son obligatorios. Por favor, completa el formulario.");
      return;
    }

    const newMovie = {
      title,
      imgSrc,
      description,
      year: parseInt(year, 10),
      buttonTrailer: "", // Puedes dejar vacío o añadir campo en form para URL tráiler
      imgModal: imgSrc, // Por simplicidad, reutilizamos imgSrc para modal
    };

    onAddMovie(newMovie);

    setTitle("");
    setImgSrc("");
    setDescription("");
    setYear("");
  };

  return (
    <section className="formMovie">
      <div>
        <img src="png/image19.webp" alt="Formulario película" className="form-image" />
      </div>
      <form id="formMovie" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Ingrese el título" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" id="imgSrcInput" placeholder="URL de la imagen" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} required />
        <textarea id="description" placeholder="Ingrese la descripción" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="number" id="year" placeholder="Ingrese el año" value={year} onChange={(e) => setYear(e.target.value)} required />
        <button type="submit" className="form-button">
          Agregar Película
        </button>
      </form>
    </section>
  );
}
