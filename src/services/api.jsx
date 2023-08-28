import axios from 'axios';


// Requete pour obtenir la liste de pokemon
export async function fetchPokemonList() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        throw error;
    }
}

// Requête pour obtenir la pagination
export async function fetchPagination({ currentPage }) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${currentPage}`);
        const data = await response.json();
        return data.results; 
    } catch (error) {
        throw error;
    }
};

// Requete pour obtenir les détails d'un pokemon a partir de son ID
export async function fetchPokemonData({ pokemonId }) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon data:', error);
    }
}

// Requete pour obtenir les détails d'un pokemon a partir de son ID
export async function fetchPokemonEggGroup({ pokemonId }) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/egg-group/${pokemonId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon Egg Group data:', error);
    }
}

// Requete pour obtenir les détails d'un pokemon a partir de son ID
export async function fetchPokemonGender({ pokemonId }) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/gender/${pokemonId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon Gender data:', error);
    }
}

// Requete pour obtenir les détails d'un pokemon a partir de son ID
export async function fetchPokemonHabitat({ pokemonId }) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${pokemonId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon Habitat data:', error);
    }
}

// Requete pour obtenir les détails d'un pokemon a partir de son ID
export async function fetchPokemonDescription({ pokemonId }) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon Description data:', error);
    }
}

// Requete pour obtenir les évolution d'un pokemon
export async function fetchPokemonEvolution({ pokemonId }) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon evolution:', error);
    }
}

// Requete pour obtenir les détails d'un pokemon a partir de son nom 
export async function fetchPokemonByName(pokemonName) {
    try {
        console.log(pokemonName);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokemon evolution:', error);
    }
}
