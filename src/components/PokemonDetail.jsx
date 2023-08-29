import '../styles/PokemonDetail.css';
import Navbar from '../components/Navbar';
import { fetchPokemonData, fetchPokemonEvolution, fetchPokemonEggGroup, fetchPokemonGender, fetchPokemonHabitat, fetchPokemonDescription } from '../services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { color } from '../styles/TypesColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEgg, faHouse, faPercent, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import StatGauge from '../components/StatGauge.jsx';

function PokemonDetail() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonEvolution, setPokemonEvolution] = useState();
  const [pokemonEggGroup, setPokemonEggGroup] = useState();
  const [pokemonGender, setPokemonGender] = useState();
  const [pokemonHabitat, setPokemonHabitat] = useState();
  const [pokemonDescription, setPokemonDescription] = useState();
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

    async function fetchAndSetPokemonEggGroup() {
      try {
        const data = await fetchPokemonEggGroup({ pokemonId });
        setPokemonEggGroup(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Pokemon Egg Group data:', error);
      }
    }

    async function fetchAndSetPokemonGender() {
      try {
        const data = await fetchPokemonGender({ pokemonId });
        setPokemonGender(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Pokemon Gender data:', error);
      }
    }

    async function fetchAndSetPokemonHabitat() {
      try {
        const data = await fetchPokemonHabitat({ pokemonId });
        setPokemonHabitat(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Pokemon Habitat data:', error);
      }
    }

    async function fetchAndSetPokemonDescription() {
      try {
        const data = await fetchPokemonDescription({ pokemonId });
        setPokemonDescription(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Pokemon Description data:', error);
      }
    }

    async function fetchAndSetPokemonEvolution() {
      try {
        const data = await fetchPokemonEvolution({ pokemonId });
        setPokemonEvolution(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }

    fetchAndSetPokemonEvolution();
    fetchAndSetPokemonEggGroup();
    fetchAndSetPokemonGender();
    fetchAndSetPokemonHabitat();
    fetchAndSetPokemonDescription();
    fetchAndSetPokemonData();
  }, [pokemonId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  if (!pokemonEvolution) {
    return <div>Loading...</div>;
  }

  function cleanDescription(description) {
    if (!description) {
      return "";
    }
    // Remplace les caractères spéciaux indésirables par des espaces
    return description.replace(/[\u000c]/g, " ");
  }

  function capitalizeFirstLetter(text) {
    const sentences = text.split('. ');

    // Mettre la première lettre en majuscule et le reste en minuscules
    const capitalizedSentences = sentences.map((sentence) => {
      const trimmedSentence = sentence.trim();
      if (trimmedSentence.length > 0) {
        return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1).toLowerCase();
      }
      return '';
    });
    const newCapitalizedText = capitalizedSentences.join('. ');

    return newCapitalizedText;
  }


  // Gestionnaire de couler selon le/les type(s)
  const getTypeColor = (type) => {
    switch (type) {
      case 'normal':
        return
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
        <p className='description'>{pokemonData && capitalizeFirstLetter(cleanDescription(pokemonDescription.flavor_text_entries[0].flavor_text))}</p>
        </div>
      </div>


      <div className='global-info'>
        <div className='weight'>
          <h3>{pokemonData.weight / 10} KG</h3>
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
          <h3>{pokemonData.height / 10} M</h3>
          <p>Height</p>
        </div>
      </div>

      <h2 className='title'>Profile</h2>

      <div className='caracteristics-container'>
        <div className='left-caracteristics' style={{ backgroundColor: getTypeColor(pokemonData.types[0].type.name) }}>
          {pokemonData.types && (
            <div className='caracteristic'>
              <div className='caracteristic-name'>
                <FontAwesomeIcon icon={faPercent} />
                <p className='bold'>Catch</p>
              </div>
              <p>0%</p>
            </div>
          )}
          {pokemonEggGroup && (
            <div className='caracteristic'>
              <div className='caracteristic-name'>
                <FontAwesomeIcon icon={faEgg} />
                <p className='bold'>Egg Groups</p>
              </div>
              <p>{pokemonEggGroup.name}</p>
            </div>
          )}
          {pokemonData.abilities && (
            <div className='caracteristic'>
              <p className='bold'>Abilities</p>
              <p className='abilities'>{pokemonData.abilities[0].ability.name}, {pokemonData.abilities[1].ability.name}</p>
            </div>
          )}
        </div>

        <div className='right-caracteristics' style={{ backgroundColor: getTypeColor(pokemonData.types[0].type.name) }}>
          {pokemonGender && (
            <div className='caracteristic'>
              <div className='caracteristic-name'>
                <FontAwesomeIcon icon={faVenusMars} />
                <p className='bold'>Gender</p>
              </div>
              <p>{pokemonGender.name}</p>
            </div>
          )}
          {pokemonHabitat && (
            <div className='caracteristic'>
              <div className='caracteristic-name'>
                <FontAwesomeIcon icon={faHouse} />
                <p className='bold'>Habitat</p>
              </div>
              <p>{pokemonHabitat.name}</p>
            </div>
          )}
        </div>
      </div>

      <h2 className='title'>Evolution</h2>
      <div className='evolutions-container'>
        {pokemonEvolution.chain && (
          <div className='row'>
            <h3>{pokemonEvolution.chain.species.name}</h3>
            <FontAwesomeIcon className='arrow' icon={faArrowRightLong} />
            {pokemonEvolution.chain.evolves_to[0] && (
              <div className='row'>
                <h3>{pokemonEvolution.chain.evolves_to[0].species.name}</h3>
                <FontAwesomeIcon className='arrow' icon={faArrowRightLong} />
                {pokemonEvolution.chain.evolves_to[0].evolves_to[0] && (
                  <h3>{pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name}</h3>
                )}
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export default PokemonDetail;