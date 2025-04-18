import React from 'react';
import '../index.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="search-input"
    />
    <button className="search-btn">Search</button>
  </div>
);

export default SearchBar;