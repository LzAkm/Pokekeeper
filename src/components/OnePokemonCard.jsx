import '../styles/OnePokemonCard.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkEmpty } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkFilled } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonToPokedex, addPokemonToBookmarks, removePokemonFromBookmarks, removePokemonFromPokedex } from '../store/reducers/PokedexSlice.jsx';


function OnePokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const bookmarkedPokemons = useSelector(state => state.pokedex.bookmarkedPokemons);

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

  return (
    <div className='card'>
      <div className='card-header'>
        <button className='fav-btn' onClick={() => {
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
        <Link className='link' to={`/pokemon/${pokemon.pokemonId}`}>
          <button className='more-btn'>More details</button>
        </Link>
      </div>
    </div>
  )
}

export default OnePokemonCard;