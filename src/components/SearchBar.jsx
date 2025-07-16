import React, { useState } from "react";

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
    <div className="section-buscar">
      <input
        type="text"
        placeholder="Buscar por título"
        style={{ color: "black" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="searchButton" onClick={handleSubmit}>
        Buscar
      </button>

      <select id="yearFilter" value={year} onChange={(e) => setYear(e.target.value)}>
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

      <button id="buttonYear" onClick={handleYearSearch}>
        Buscar
      </button>
    </div>
  );
}
