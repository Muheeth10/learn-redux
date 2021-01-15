import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import {increment,decrement} from './Actions';

function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch =useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <h1>Islogged {islogged? (<h2>Yes,you are logged in</h2>) : (<h2>NO,you are not logged in</h2>) }</h1>
    </div>
  );
}

export default App;
