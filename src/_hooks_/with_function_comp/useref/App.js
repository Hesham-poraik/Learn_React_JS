import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('main title');
  const btnCounter = useRef();
  const maxNum = useRef(5);
  useEffect(_ => {
    btnCounter.current.focus();
  }, [])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      padding: '20px',
      margin: '20px',
      border: '1px solid #999'}}>
      <button ref={btnCounter} onClick={() => (counter < maxNum.current)? setCounter(counter + 1) : setTitle('you reached max value')}>Count Up</button>
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