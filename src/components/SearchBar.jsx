import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaStar } from "react-icons/fa";

export default function SearchBar({
  onSearch,
  onYearSearch,
  showFavorites,
  onToggleFavorites,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleYearSearch = (e) => {
    e.preventDefault();
    onYearSearch(year, searchTerm);
  };

  return (
    <form className="section-buscar" onSubmit={handleSubmit}>
      <div className="search-group">
        {/* BUSCAR POR TITULO */}
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Buscar por título"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-modern"
          />
          <button type="submit" className="btn-modern">
            <FaSearch className="icon" /> Buscar
          </button>
        </div>

        {/* BUSCAR POR AÑO */}
        <div className="input-wrapper">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="select-modern"
          >
            <option value="">Buscar por año</option>
            {[...Array(24)].map((_, i) => {
              const y = 2000 + i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            className="btn-modern"
            onClick={handleYearSearch}
          >
            <FaCalendarAlt className="icon" /> Buscar
          </button>
        </div>

        {/* ⭐ SOLO FAVORITAS */}
        <button
          type="button"
          className={`favorites-toggle ${showFavorites ? "active" : ""}`}
          onClick={onToggleFavorites}
        >
          <FaStar className="icon" />
          {showFavorites ? "Favoritas" : "Solo favoritas"}
        </button>
      </div>
    </form>
  );
}
