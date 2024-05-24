import {useReducer} from 'react';
import { increment, decrement } from './useReducer/actions';
import reducer from './useReducer/reducer';
import './App.css';
//https://www.youtube.com/watch?v=o1hrVoKEbZI&t=830s



function App() {

  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
  })


  return (
    <div className='App'>
        <button onClick={() => dispatch(decrement(1))}>-1</button>
        <button onClick={() => dispatch(decrement(2))}>-2</button>

        <span>{state.counter}</span>

        <button onClick={() => dispatch(increment(1))}>+1</button>
        <button onClick={() => dispatch(increment(2))}>+2</button>

    </div>
  );

}

export default App;
