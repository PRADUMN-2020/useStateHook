import React, {useState} from "react";

function App() {

  const [count, setCount] =useState(0);
  

  function incrementCounter()
  {
    setCount(count+1);
  }
  function decrementCounter()
  {
    setCount(count-1);
  }
  return  <div className="container">
  <h1>{count}</h1>
  <button onClick={decrementCounter}>-</button>
  <button onClick={incrementCounter}>+</button>
</div>;
}

export default App;

