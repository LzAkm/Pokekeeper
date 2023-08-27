import React, { useState } from 'react';
import PokeCard from '../components/PokeCard.jsx';
import Navbar from '../components/Navbar.jsx';
import '../styles/HomePage.css';
import SearchBar from '../components/SearchBar.jsx';

function HomePage() {
 const [searchPokemonName, setSearchPokemonName] = useState('');

  function onSearch(searchText) {
    setSearchPokemonName(searchText.toLowerCase().trim());
  }

  return (
    <div className='home-page'>
      <Navbar />
      <p className='p'><span className='blue'>Search</span> pokemons here and <span className='blue'>create</span> your team !</p>
      <SearchBar onSearch={onSearch}/>
      <div className='cards-container'>
        <PokeCard searchPokemonName={searchPokemonName}/>
      </div>
    </div>
  );
}

export default HomePage;
