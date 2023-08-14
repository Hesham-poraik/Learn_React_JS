import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('main title');
  useEffect(() => { // on mount
    console.log('mount only with [] :)')
  },[])
  useEffect(() => { // change with mount & update[not same value]
    console.log('mount or update any thing in component')
  })
  useEffect(() => { // in mount & change title
    console.log('mount or change with title only')
  }, [title])
  useEffect(() => { // => way [1 => 2] # will amount :)
    console.log('mount or change with title only') // this is [1]
    return () => {  // this is [2]
      setTimeout(() => {
        setTitle('');
        console.log("cleanup")
      }, 1000)
    }
  }, [title])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      padding: '20px',
      margin: '20px',
      border: '1px solid #999'}}>
      <button onClick={() => setCounter(counter + 1)}>Count Up</button>
      <button onClick={() => setTitle(counter + 1)}>change title</button>
      <h1>
        {counter}
      </h1>
      <h1>
        {title}
      </h1>
    </div>
  );
}

export default App;