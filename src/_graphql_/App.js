import React from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={CharactersList}/>
        <Route path='/char/:id' Component={Character}/>
        <Route path='/search' Component={Search}/>
      </Routes>
    </div>
  );
}

export default App;

