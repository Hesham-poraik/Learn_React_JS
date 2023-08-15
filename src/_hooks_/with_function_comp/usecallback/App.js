import React, { useMemo, useState } from 'react';
import './App.scss';
import Button from './Button';

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = (n) => setCounter((c) => c + n);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      padding: '20px',
      margin: '20px',
      border: '1px solid #999'}}>
      {useMemo(()=> <Button fun={onClick} cont='increment' n={1} color='#00f'/>, [])}
      <h1>
        {counter}
      </h1>
    </div>
  );
}

export default App;