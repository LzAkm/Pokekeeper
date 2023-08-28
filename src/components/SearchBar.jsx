import React from 'react';
import styles from '../styles/SearchBar.module.css'; 

function SearchBar({ onSearch }) {
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm); 
  };

  return (
    <div className={styles['search-bar-container']}> 
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        className={styles['search-input']} 
      />
    </div>
  );
}

export default SearchBar;