import React, { useRef, useState } from 'react';
import './App.scss';

const memoObj = {};

const sumFn = (x, y) => {
  console.log(memoObj);
  return new Promise((resolve, reject) => {
    if(memoObj[x + '+' + y]) resolve(memoObj[x + '+' + y])
    setTimeout(_ => {
      const res = x + y;
      memoObj[x + '+' + y] = res;
      resolve(res);
    }, 2000);
  });
};


function App() {
  const [sum, setSum] = useState(0);
  const fNum = useRef();
  const lNum = useRef();
  const handelCalc = _ => {
    sumFn(+fNum.current.value, +lNum.current.value).then(res => setSum(res))
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      padding: '20px',
      margin: '20px',
      border: '1px solid #999'}}>
      <button onClick={handelCalc}>Count Up</button>
      <input ref={fNum}/>
      <input ref={lNum}/>
      <h1>
        {sum}
      </h1>
    </div>
  );
}

export default App;