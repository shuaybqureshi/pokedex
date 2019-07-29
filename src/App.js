import React from 'react';
import './App.css';
import Pokeball from './containers/PokeBall/pokeball';
import SearchScreen from './components/SearchScreen/SearchScreen';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Route path="/SearchScreen" component={SearchScreen} exact />
          <Route path="/" component={Pokeball} exact />
        </div>
    </BrowserRouter>
  );
}

export default App;
