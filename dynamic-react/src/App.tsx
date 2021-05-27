import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './store'

//The jsxRuntime pragma is necessary to get Emotion and React to work w/ latest Create-React-App version
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react';

const selectCount = (state: { count: number; }) => state.count;

function App() : JSX.Element {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/count')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          dispatch({type: 'count/set', payload:result})
        },
        (error): void => {
          
        }
      )
  }, [])

  return (
    <div css={css`
        text-align: center;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `}
    >
      <p> You've clicked the button {count} times! </p>
      <button onClick={() => dispatch({type: 'count/increment'})}>increment</button> 
      <button onClick={() => dispatch({type: 'count/decrement'})}>decrement</button>
      <button onClick={() => dispatch({type: 'count/reset'})}>reset</button>
      <button onClick={() => 
        fetch('/count', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({'count':count})
        })
      }>save</button>
    </div>
  );
}

export default App;
