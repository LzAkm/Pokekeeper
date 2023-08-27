// App.js
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router/Routes';
import store from './store/store.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppRouter/>
      </div>
    </Provider>
  );
}

export default App;
