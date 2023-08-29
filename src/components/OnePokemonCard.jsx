import '../styles/OnePokemonCard.css'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkEmpty } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkFilled } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonToPokedex, addPokemonToBookmarks, removePokemonFromBookmarks, removePokemonFromPokedex } from '../store/reducers/PokedexSlice.jsx';
import { useEffect, useState } from 'react';
import { fetchPokemonData } from '../services/api';
import { color } from '../styles/TypesColor.js'

function OnePokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const [pokemonData, setPokemonData] = useState(null);
  const bookmarkedPokemons = useSelector(state => state.pokedex.bookmarkedPokemons);

  const isBookmarked = bookmarkedPokemons && bookmarkedPokemons.find(item => item.pokemonId === pokemon.pokemonId);

  const handleToggle = () => {
    console.log(bookmarkedPokemons);
    if (bookmarkedPokemons.find(item => item.pokemonId === pokemon.pokemonId)) {
      console.log('ok');
      dispatch(removePokemonFromPokedex(pokemon));
      console.log('Pokemon removed from Pokédex:', pokemon);
      dispatch(removePokemonFromBookmarks(pokemon));
    } else {
      dispatch(addPokemonToPokedex(pokemon));
      console.log('Pokemon added to Pokédex:', pokemon);
      dispatch(addPokemonToBookmarks(pokemon));
    }
  }

  useEffect(() => {
    async function fetchAndSetPokemonData() {
      try {
        const data = await fetchPokemonData({ pokemonId: pokemon.pokemonId });
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
    fetchAndSetPokemonData();
  }, [pokemon.pokemonId]);


  // Gestionnaire de couler selon le/les type(s)
  const getTypeColor = (type) => {
    switch (type) {
      case 'normal':
        return color.grey
      case 'fire':
        return color.fire;
      case 'water':
        return color.water;
      case 'electric':
        return color.electric;
      case 'grass':
        return color.grass;
      case 'ice':
        return color.ice;
      case 'fighting':
        return color.fighting;
      case 'poison':
        return color.poison;
      case 'ground':
        return color.ground;
      case 'flying':
        return color.flying;
      case 'psychic':
        return color.psychic;
      case 'bug':
        return color.bug;
      case 'rock':
        return color.rock;
      case 'gohst':
        return color.ghost;
      case 'dragon':
        return color.dragon;
      case 'dark':
        return color.dark;
      case 'steel':
        return color.steel;
      case 'fairy':
        return color.fairy;
      default:
        return color.grey;
    }
  };

  return (
    <div className={`card ${isBookmarked ? 'blue-border' : ''}`}>
      <div className='card-header'>
        <button className={`fav-btn ${isBookmarked ? 'blue-bookmark' : ''}`} onClick={() => {
          handleToggle(pokemon);
        }}>
          <FontAwesomeIcon icon={bookmarkedPokemons && bookmarkedPokemons.find(item => item.pokemonId === pokemon.pokemonId) ? faBookmarkFilled : faBookmarkEmpty} />
        </button>
      </div>
      <div className='card-body'>
        <img className='pokemon-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemonId}.svg`} />
        <h3 className='name'>{pokemon.name}</h3>
      </div>
      <div className='card-footer'>
        {pokemonData && pokemonData.types && (
          <div className='types-rectangles'>
            {pokemonData.types.map((typeData, index) => (
              <div
                key={index}
                className='rectangle'
                style={{ backgroundColor: getTypeColor(typeData.type.name) }}
              >
                <p>{typeData.type.name}</p>
              </div>
            ))}
          </div>
        )}

        <Link className='link' to={`/pokemon/${pokemon.pokemonId}`}>
          <button className='more-btn'>More details</button>
        </Link>
      </div>
    </div>
  )
}

export default OnePokemonCard;