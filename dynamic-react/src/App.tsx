import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import './store'

const selectCount = (state: { count: number; }) => state.count;

function App() : JSX.Element {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <p> You've clicked the button {count} times! </p>
      <button onClick={() => dispatch({type: 'count/increment'})}>increment</button> 
      <button onClick={() => dispatch({type: 'count/decrement'})}>decrement</button>
      <button onClick={() => dispatch({type: 'count/reset'})}>reset</button>
    </div>
  );
}

export default App;
