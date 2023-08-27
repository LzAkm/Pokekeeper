import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import imageSrc from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const bookmarkedPokemons = useSelector((state) => state.pokedex.bookmarkedPokemons);
  const numberOfPokemon = bookmarkedPokemons.length; // Comptez les Pokémon en favoris

  return (
    <div className={styles.navigationContainer}>
      <Link to="/">
        <img src={imageSrc} className={styles.logo} alt="logo pokekeeper" />
      </Link>
      <button className={styles.pokedexBtn}>
        <Link className={styles.link} to="/pokedex">{numberOfPokemon} Pokémon</Link>
      </button>
    </div>
  );
}

export default Navbar;