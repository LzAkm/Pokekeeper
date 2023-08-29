import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokedex: [],
  bookmarkedPokemons: [],
};

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    initializePokedex: (state) => {
      const pokedexData = localStorage.getItem('pokedex');
      if (pokedexData) {
        state.pokedex = JSON.parse(pokedexData);
      }
    },

    addPokemonToPokedex: (state, action) => {
      addPokemonToPokedex: (state, action) => {
        state.pokedex.push(action.payload);
        localStorage.setItem('pokedex', JSON.stringify(state.pokedex));
      }
    },

    removePokemonFromPokedex: (state, action) => {
      removePokemonFromPokedex: (state, action) => {
        const pokemonIdToRemove = action.payload.pokemonId;
        state.pokedex = state.pokedex.filter(
          (pokemon) => pokemon.pokemonId !== pokemonIdToRemove
        );
        localStorage.setItem('pokedex', JSON.stringify(state.pokedex));
      }
    },

    addPokemonToBookmarks: (state, action) => {
      state.bookmarkedPokemons.push(action.payload);
      localStorage.setItem('pokedex', JSON.stringify(state.pokedex));
    },

    removePokemonFromBookmarks: (state, action) => {
      const pokemonIdToRemove = action.payload.pokemonId;
      state.bookmarkedPokemons = state.bookmarkedPokemons.filter(
        (pokemon) => pokemon.pokemonId !== pokemonIdToRemove
      );
      localStorage.setItem('pokedex', JSON.stringify(state.pokedex));
    },

    clearPokedex: (state, action) => {
      state.pokedex = [];
      state.bookmarkedPokemons = [];
      localStorage.removeItem('pokedex');
    }
  },
});

export const {
  initializePokedex,
  addPokemonToPokedex,
  removePokemonFromPokedex,
  clearPokedex,
  addPokemonToBookmarks,
  removePokemonFromBookmarks
} = pokedexSlice.actions;

export default pokedexSlice.reducer;
