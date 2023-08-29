import '../styles/OnePokemonCard.module.css'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkEmpty } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkFilled } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonToPokedex, addPokemonToBookmarks, removePokemonFromBookmarks, removePokemonFromPokedex } from '../store/reducers/PokedexSlice.jsx';
import { useEffect, useState } from 'react';
import { fetchPokemonData } from '../services/api';
import { color } from '../styles/TypesColor.js'
import styles from '../styles/OnePokemonCard.module.css';

function OnePokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const [pokemonData, setPokemonData] = useState(null);
  const bookmarkedPokemons = useSelector(state => state.pokedex.bookmarkedPokemons);
  const pokedex = useSelector((state) => state.pokedex.pokedex);


  const isBookmarked = bookmarkedPokemons && bookmarkedPokemons.find(item => item.pokemonId === pokemon.pokemonId);

  const handleToggle = () => {
    console.log(bookmarkedPokemons);
    if (bookmarkedPokemons.find(item => item.pokemonId === pokemon.pokemonId)) {
      console.log('ok');
      dispatch(removePokemonFromPokedex(pokemon));
      dispatch(removePokemonFromBookmarks(pokemon));
      console.log('Pokemon removed from Pokédex:', pokemon);
    } else {
      dispatch(addPokemonToPokedex(pokemon));
      dispatch(addPokemonToBookmarks(pokemon));
      console.log('Pokemon added to Pokédex:', pokemon);
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
    <div className={`${styles.card} ${isBookmarked ? styles.blueBorder : ''}`}>
      <div className={styles.cardHeader}>
        <button className={`${styles.favBtn} ${isBookmarked ? styles.blueBookmark : ''}`} onClick={handleToggle}>
          <FontAwesomeIcon
            icon={bookmarkedPokemons && bookmarkedPokemons.find(item => item.pokemonId === pokemon.pokemonId) ? faBookmarkFilled : faBookmarkEmpty}
          />
        </button>
      </div>
      <div className={styles.cardBody}>
        <img className={styles.pokemonImg} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemonId}.svg`} alt={pokemon.name} />
        <h3 className={styles.name}>{pokemon.name}</h3>
      </div>
      <div className={styles.cardFooter}>
        {pokemonData && pokemonData.types && (
          <div className={styles.typesRectangles}>
            {pokemonData.types.map((typeData, index) => (
              <div
                key={index}
                className={styles.rectangle}
                style={{ backgroundColor: getTypeColor(typeData.type.name) }}
              >
                <p>{typeData.type.name}</p>
              </div>
            ))}
          </div>
        )}

        <Link className={styles.link} to={`/pokemon/${pokemon.pokemonId}`}>
          <button className={styles.moreBtn}>More details</button>
        </Link>
      </div>
    </div>
  )
}

export default OnePokemonCard;
