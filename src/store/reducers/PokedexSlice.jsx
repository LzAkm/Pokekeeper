import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokedex: [],
  bookmarkedPokemons: [],
};

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    addPokemonToPokedex: (state, action) => {
      state.pokedex.push(action.payload);
      localStorage.setItem('pokedex', JSON.stringify(state.pokedex));
      console.log(state.pokedex);
    },

    removePokemonFromPokedex: (state, action) => {
      const pokemonIdToRemove = action.payload.pokemonId;
      state.pokedex = state.pokedex.filter(
        (pokemon) => pokemon.pokemonId !== pokemonIdToRemove
      );
    },    

    addPokemonToBookmarks: (state, action) => {
      state.bookmarkedPokemons.push(action.payload);
      console.log(state.bookmarkedPokemons);
    },

    removePokemonFromPokedex: (state, action) => {
      const pokemonIdToRemove = action.payload.pokemonId;
      state.pokedex = state.pokedex.filter(
        (pokemon) => pokemon.pokemonId !== pokemonIdToRemove
      );
      localStorage.setItem('pokedex', JSON.stringify(state.pokedex));
    },    

    clearPokedex: (state, action) => {
      state.pokedex = [];
    }    
  },
});

export const {
  addPokemonToPokedex,
  removePokemonFromPokedex,
  clearPokedex,
  addPokemonToBookmarks,
  removePokemonFromBookmarks
} = pokedexSlice.actions;

export default pokedexSlice.reducer;