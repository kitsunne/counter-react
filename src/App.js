
import './App.css';
import React, { useState } from "react";

const DEFAULT_VALUE=0;

function App() {
  const [count, setCounter] = useState(DEFAULT_VALUE);

  const resetCount = () => {
    setCounter(DEFAULT_VALUE);
  }

  const increaseCount = () => {
    setCounter(count + 1);
  }
    
  const decreaseCount = () => {
    setCounter(count - 1);
  }

  const multiplyCount = () => {
    setCounter(count*2);
  }

  return (
    <div class="container">
      <h1>COUNTER</h1>
      <span style={{color: count <0 ? "green" : "red"}} id="value" >{count}</span>
      <div class="button-container">
        <Button text="decrease" onAction={decreaseCount}/>
        <Button text="reset" onAction={resetCount}/>
        <Button text="increase" onAction={increaseCount}/>
        <Button  text="x2" onAction={multiplyCount}/>
      </div>
    </div>
  );
}

const Button = ({onAction,text}) => {
  return <button class="btn" onClick={onAction}>{text.toUpperCase()}</button>
}

export default App;
