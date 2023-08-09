import { React, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: {
      name: $name
    }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, {loading, data, error, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS,
    {
    variables: {
      name,
    },
  });

  console.log({
    called,
    loading,
    data,
    error,
  })

  return (
    <div style={{height: '100vh', textAlign: 'center'}}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={()  => getLocations()}>Search</button>
    </div>
      {loading && <div>loading...</div>}
      {error && <div>wrong...</div>}
      {data && (
        <div>
          {data.characters.results.map((char, ind) => {
            return <p key={ind}>{char.location.name}</p>
          })}
        </div>
      )}
    </div>
  )
}

export default Search
