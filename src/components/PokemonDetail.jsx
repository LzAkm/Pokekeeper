import '../styles/PokemonDetail.css';
import Navbar from '../components/Navbar';
import { fetchPokemonData, fetchPokemonEvolution } from '../services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { color } from '../styles/TypesColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import StatGauge from '../components/StatGauge.jsx';




function PokemonDetail() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonEvolution, setPokemonEvolution] = useState();
  const { pokemonId } = useParams();

  useEffect(() => {
    async function fetchAndSetPokemonData() {
      try {
        const data = await fetchPokemonData({ pokemonId });
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }

    async function fetchAndSetPokemonEvolution() {
      try {
        const data = await fetchPokemonEvolution({ pokemonId });
        console.log(data);
        setPokemonEvolution(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }

    fetchAndSetPokemonEvolution();

    fetchAndSetPokemonData();
  }, [pokemonId]);



  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  if (!pokemonEvolution) {
    return <div>Loading...</div>;
  }

  // Gestionnaire de couler selon le/les type(s)
  const getTypeColor = (type) => {
    switch (type) {
      case 'normal':
        return color.normal;
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
        return color.gound;
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
    <div className='detail-page'>
      <Navbar />

      <div className='header'>
        <h1 className='pokemon-name'>{pokemonData.name}</h1>
      </div>

      <div className='stats-content'>
        <img className='pokemon-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} />
        <div className='stats-gauges'>
          <div className='stat'>
            <p>HP</p>
            <StatGauge
              value={pokemonData.stats[0].base_stat}
              maxValue={150}
              type={pokemonData.types[0].type.name}
            />
          </div>
          <div className='stat'>
            <p>Attack</p>
            <StatGauge
              value={pokemonData.stats[1].base_stat}
              maxValue={150}
              type={pokemonData.types[0].type.name}
            />
          </div>
          <div className='stat'>
            <p>Defense</p>
            <StatGauge
              value={pokemonData.stats[2].base_stat}
              maxValue={150}
              type={pokemonData.types[0].type.name}
            />
          </div>
          <div className='stat'>
            <p>Speed</p>
            <StatGauge
              value={pokemonData.stats[5].base_stat}
              maxValue={150}
              type={pokemonData.types[0].type.name}
            />
          </div>
          <div className='stat'>
            <p>Sp Atk</p>
            <StatGauge
              value={pokemonData.stats[3].base_stat}
              maxValue={150}
              type={pokemonData.types[0].type.name}
            />
          </div>
          <div className='stat'>
            <p>Sp Def</p>
            <StatGauge
              value={pokemonData.stats[4].base_stat}
              maxValue={150}
              type={pokemonData.types[0].type.name}
            />
          </div>
        </div>
      </div>

      <div className='global-info'>
        <div className='weight'>
          <h3>{pokemonData.weight} KG</h3>
          <p>Wheight</p>
        </div>
        <div className='types-container'>
          <div className='types'>
            {pokemonData.types.map((typeData, index) => (
              <div
                key={index}
                className='type'
                style={{ backgroundColor: getTypeColor(typeData.type.name) }}
              >
              </div>
            ))}
          </div>
        </div>

        <div className='height'>
          <h3>{pokemonData.height} M</h3>
          <p>Height</p>
        </div>
      </div>

      <h2 className='title'>Profile</h2>

      <div className='caracteristics-container'>
        <div className='left-caracteristics'>
          <div className='caracteristic'>
            <p className='bold'>Catche</p>
            <p>0%</p>
          </div>
          <div className='caracteristic'>
            <p className='bold'>Egg Groups</p>
            <p>Monster, Dragon</p>
          </div>
          <div className='caracteristic'>
            <p className='bold'>Abilities</p>
            <p className='abilities'>{pokemonData.abilities[0].ability.name}, {pokemonData.abilities[1].ability.name}</p>
          </div>
        </div>
        <div className='right-caracteristics'>
          <div className='caracteristic'>
            <p className='bold'>Gender Ratio</p>
            <p>87,5% 12,5%</p>
          </div>
          <div className='caracteristic'>
            <p className='bold'>Hatch Steps</p>
            <p>5100</p>
          </div>
          <div className='caracteristic'>
            <p className='bold'>Evs</p>
            <p>3 Sp Att</p>
          </div>
        </div>
      </div>

      <h2 className='title'>Evolution</h2>
      <div className='evolutions-container'>
        <img className='evolution-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} />
        <FontAwesomeIcon className='arrow' icon={faArrowRightLong} />
        <img className='evolution-image' /* src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonEvolutionId}.svg`}  */ />
        <FontAwesomeIcon className='arrow' icon={faArrowRightLong} />
        <img className='evolution-image' src={pokemonEvolution.chain.evolves_to[0].species.url} />
      </div>
    </div>
  );
}

export default PokemonDetail;