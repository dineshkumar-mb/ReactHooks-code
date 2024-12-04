import React from 'react'
import Counter from './components/state/Counter'
import CounteruseState from './components/state/CounteruseState'
import CounteruseRef from './components/state/useRef'
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount,decrement } from "./features/counter/counterSlice";

function App() {

  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
   <>
    <div>
      <h1>Counter: {count}</h1>
      
    <button onClick={() => dispatch(increment())}>Increment</button>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
    <Counter/> 
   <CounteruseState/>
   <CounteruseRef/>
   </>
  )
}

export default App;