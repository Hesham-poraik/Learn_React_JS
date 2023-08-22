import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counterSlice';

const Counter = () => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: 'center'}}>
      <h1>hello redux</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter
