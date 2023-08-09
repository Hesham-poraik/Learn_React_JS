import React from 'react';
import useCharacter from '../hooks/useCharacter';
import { Link } from 'react-router-dom';
import './character.scss'
import { useParams } from 'react-router';

const Character = () => {
  const id = useParams().id;
  const {loading, data, error} = useCharacter(id);
  // console.log(loading, data, error)
  if(loading) return <div>loading...</div>;
  if(error) return <div>wrong...</div>;
  return (
    <div className='character container'>
      <div className='img'>
        <img src={data.character.image} alt='user img'/>
      </div>
      <Link to={'/'} className='link'>
        <button>GO TO HOME.😉🎉</button>
      </Link>
      <div className='character-content'>
        <h2>{data.character.name}</h2>
        <div className='character-episode'>
          {data.character.episode.map((episode, ind) => {
            return <div key={ind}>
              <b>{episode.name}</b> 
              <hr/>
              {episode.episode}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Character


