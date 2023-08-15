import React, { useReducer, useState } from 'react'

/*
------------------------------------------------------------------------
-------------------------- << useReducer >> ----------------------------
------------------------------------------------------------------------
|           _____________________________________________
|          |                                             |                
| const [state, dispatch] = useReducer(reducerFun, initialValue);
|                   |                       |
|                    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
=> you can git initialValue to state & write renderFun(state, action)
=> then call dispatch in component with action parameter you can sent
=> any thing string or object {type, payload, ....} ..etc.
------------------------------------------------------------------------
*/

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return state + action.payload;
    case 'dec':
      return state - action.payload;
    default:
      return state;
  }
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
    <div style={{padding: '10px', margin: '10px', border: '1px solid red', textAlign: 'center'}}>
      <h1>useState</h1>
      <hr/>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <h1>previous: {counter -1}</h1>
      <h1>current: {counter}</h1>
      <h1>next: {counter + 1}</h1>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>

    <div style={{padding: '10px', margin: '10px', border: '1px solid blue', textAlign: 'center'}}>
      <h1>useReducer</h1>
      <hr/>
      <button onClick={() => dispatch({type: 'inc', payload: 5})}>increment</button>
      <h1>previous: {count -1}</h1>
      <h1>current: {count}</h1>
      <h1>next: {count + 1}</h1>
      <button onClick={() => dispatch({type: 'dec', payload: 5})}>decrement</button>
    </div>
    </>
  )
}

export default App