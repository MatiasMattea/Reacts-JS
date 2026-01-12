import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

const handleSearch = (e) => {
  e.preventDefault();
console.log('🔍 [SearchBar.jsx PRINCIPAL] BUSCANDO:', searchTerm);
  
  if (searchTerm.trim()) {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  }
};

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="input-group">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar productos..."
          className="form-control"
        />
        <button
          type="submit"
          className="btn"
        >
          🔍
        </button>
      </div>
    </form>
  );
};

export default SearchBar;