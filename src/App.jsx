import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router/Routes';
import store from './store/store';
import { initializePokedex } from './store/reducers/PokedexSlice.jsx';

function App() {
  useEffect(() => {
    store.dispatch(initializePokedex());
  }, []);

  return (
    <Provider store={store}>
      <div className='App'>
        <AppRouter/>
      </div>
    </Provider>
  );
}

export default App;