import React, { useEffect } from 'react';
import '../styles/Pokedex.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import OnePokemonCard from '../components/OnePokemonCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { addPokemonToPokedex } from '../store/reducers/PokedexSlice.jsx'; 
import { setInitialized } from '../store/reducers/initSlice.jsx'; 
import EmptyPokedex from './EmptyPokedex';

function Pokedex({ pokemon }) {
  const dispatch = useDispatch();
  const pokedex = useSelector((state) => state.pokedex.pokedex);
  const bookmarkedPokemons = useSelector((state) => state.pokedex.bookmarkedPokemons);
  const initialized = useSelector((state) => state.init.initialized);

  useEffect(() => {
    if (!initialized) {
      const storedPokedex = localStorage.getItem('pokedex');
      if (storedPokedex) {
        const parsedPokedex = JSON.parse(storedPokedex);
        dispatch(addPokemonToPokedex(parsedPokedex)); 
      }
      dispatch(setInitialized());
    }
  }, [dispatch, initialized]);

  function clearPokedex() {
    console.log('Before clear:', bookmarkedPokemons);
    dispatch(addPokemonToPokedex([]));
    console.log('After clear:', bookmarkedPokemons);
    console.log('Pokedex cleared');
  }
  

  return (
    <div className='pokedex-page'>
      <Navbar />
      <div className='header'>
        <div className='left-text'>
          <h1>My Pokédex</h1>
          <p><span className='blue'>Complete</span> your pokedex with other pokemons !</p>
        </div>
        <button className='clear' onClick={clearPokedex}>Clear pokdex
          <FontAwesomeIcon className='trash-icon' icon={faTrash} />
        </button>
      </div>
      <div className='pokedex-content'>
        {bookmarkedPokemons.map((pokemon, index) => (
          <OnePokemonCard key={index} pokemon={pokemon} />
        ))}
        {pokedex.length === 0 && bookmarkedPokemons.length === 0 && (
          <EmptyPokedex />
        )}
      </div>
    </div>
  );
}

export default Pokedex;