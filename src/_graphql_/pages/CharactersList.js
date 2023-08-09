import React from 'react';
import useCharacters from '../hooks/useCharacters';
import { Link } from 'react-router-dom';
import './characters.scss';

const CharactersList = () => {
  const {loading, data, error} = useCharacters();

  if(loading) return <div>loading...</div>;
  if(error) return <div>wrong...</div>;

  return (
    <div className='container'>
      <div className='CharacterList'>
        {data.characters.results.map(character => {
          return (
            <Link className='link' to={`/char/${character.id}`} key={character.id}>
              <div>
                <img src={character.image} alt='user img'/>
                <h2>{character.name}</h2>
              </div>
            </Link>)
        })}
      </div>
    </div>
  )
}

export default CharactersList
