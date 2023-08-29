import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from './reducers/PokedexSlice.jsx'; 
import initReducer from './reducers/initSlice.jsx';


const store = configureStore({
  reducer: {
    pokedex: pokedexReducer, 
    init: initReducer,
  },
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('pokedex', JSON.stringify(store.getState().pokedex));
});

export default store;