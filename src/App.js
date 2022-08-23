import './App.css';
import React from 'react';
// import { useDispatch, useSelector, useStore } from 'react-redux';
// import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
 const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1> The count is: {count} </h1>
      <button onClick={() => setCount(count +1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
