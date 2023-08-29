import HomePage from '../views/HomePage';
import PokedexPage from '../views/PokedexPage';
import { Route, Routes } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';
import NotFoundPage from '../views/NotFoundPage';


function AppRouter() {
    return (
        <Routes>
            <Route path='/' exact Component={HomePage} />
            <Route path="/pokemon/:pokemonId" Component={PokemonDetail} />
            <Route path='/pokedex' Component={PokedexPage} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRouter;