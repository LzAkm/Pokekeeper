import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
      <FontAwesomeIcon className={styles['search-icon']} icon={faMagnifyingGlass} />
    </div>
  );
}

export default SearchBar;