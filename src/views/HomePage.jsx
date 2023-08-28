import React, { useEffect, useState } from 'react';
import PokeCard from '../components/PokeCard.jsx';
import Navbar from '../components/Navbar.jsx';
import '../styles/HomePage.css';
import SearchBar from '../components/SearchBar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchPagination } from '../services/api.jsx';

function HomePage() {
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const RESULTS_PER_PAGE = 30; // Nombre de résultats par page
  const totalPokemons = 10000; // Nombre total de Pokémon 
  const totalPages = Math.ceil(totalPokemons / RESULTS_PER_PAGE);

  function onSearch(searchText) {
    setSearchPokemonName(searchText.toLowerCase().trim());
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log('prev page: ', currentPage);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      console.log('next page: ', currentPage);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        const response = await fetchPagination(offset);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
  }, [currentPage, searchPokemonName]);

  return (
    <div className='home-page'>
      <Navbar />
      <p className='p'><span className='blue'>Search</span> pokemons here and <span className='blue'>create</span> your team !</p>
      <SearchBar onSearch={onSearch} />
      <div className='pagination'>
        <button className='prev' onClick={goToPreviousPage}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <p>0/100</p>
        <button className='next' onClick={goToNextPage}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className='cards-container'>
        <PokeCard searchPokemonName={searchPokemonName} />
      </div>
    </div>
  );
}

export default HomePage;
