import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incAction, decAction } from './store/action/counterAction';

const Counter = () => {
  const countState = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: 'center'}}>
      <h1>hello redux</h1>
      <p>{countState}</p>
      <button onClick={() => incAction(dispatch)}>increment</button>
      <button onClick={() => decAction(dispatch)}>decrement</button>
    </div>
  )
}

export default Counter
