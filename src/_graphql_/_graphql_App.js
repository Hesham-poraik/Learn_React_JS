import React from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import CharactersList from './_graphql_/pages/CharactersList';
import Character from './_graphql_/pages/Character';
import Search from './_graphql_/pages/Search';

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

