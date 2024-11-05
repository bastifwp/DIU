import React from 'react';
import '../stylesheets/searchbar/SearchBar.scss';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar" />
    </div>
  );
}

export default SearchBar;
