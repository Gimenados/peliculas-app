import React, { useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa"; // 👈 Agrega esto

export default function SearchBar({ onSearch, onYearSearch }) {
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
          <button type="button" className="btn-modern" onClick={handleYearSearch}>
            <FaCalendarAlt className="icon" /> Buscar
          </button>
        </div>
      </div>
    </form>
  );
}
