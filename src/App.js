import './App.css';
import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
//  const [count, setCount] = React.useState(0);
const { count } = useSelector((state) => state.counter);
const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(56))}>+56</button>
    </div>
  );
}

export default App;
