import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counterSlice';

const Counter = () => {
  const countState = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: 'center'}}>
      <h1>hello redux</h1>
      <p>{countState}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter
