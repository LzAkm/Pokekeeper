import HomePage from '../views/HomePage';
import PokedexPage from '../views/PokedexPage';
import { Route, Routes } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';


function AppRouter() {
    return (
        <Routes>
            <Route path='/' exact Component={HomePage} />
            <Route path="/pokemon/:pokemonId" Component={PokemonDetail} />
            <Route path='/pokedex' Component={PokedexPage} />
        </Routes>
    )
}

export default AppRouter;
