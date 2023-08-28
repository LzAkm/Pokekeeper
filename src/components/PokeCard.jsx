import '../styles/PokeCard.css';
import React, { useState, useEffect } from 'react';
import { fetchPokemonByName, fetchPokemonList } from '../services/api';
import { useDispatch } from 'react-redux';
import OnePokemonCard from './OnePokemonCard';


function PokeCard({ searchPokemonName }) {
  const [pokemonList, setPokemonList] = useState([]);
  const dispatch = useDispatch();

  async function fetchAndSetPokemonList() {
    try {
      const data = await fetchPokemonList();
      // Récupération de l'ID en maniant la chaine de caracteres de l'url
      setPokemonList(data.map(pokemon => {
        const urlSplited = pokemon.url.split('/').reverse()
        const pokemonId = urlSplited[1];
        return { pokemonId: pokemonId, name: pokemon.name }
      }));
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  }

  async function fetchAndSetOnePokemon() {
    try {
      const data = await fetchPokemonByName(searchPokemonName);
      setPokemonList([{ pokemonId: data.id, name: data.name }])
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  }
  

  // Execution de la requête et mise à jour des infos d'un pokémon
  useEffect(() => {
    if (searchPokemonName) {
      fetchAndSetOnePokemon();
    } else {
      fetchAndSetPokemonList();
    }

  }, [searchPokemonName]);


  

  return (
    <div className='pokemon-list'>
      {pokemonList.map((pokemon, index) => (
        <div key={index}>
          <OnePokemonCard pokemon={pokemon}/>
        </div>
      ))}
    </div>
  );
}

export default PokeCard;
