import React, { useState } from 'react'
const App = () => {
  const [num, setNum]= useState(0)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  return (
  <div className="counter">
    <h1>{num}</h1>
    <div className="buttons">
      <button className="increase" onClick={increaseNum}>
        Increase
      </button>
      <button className="decrease" onClick={decreaseNum}>
        Decrease
      </button>
    </div>
  </div>
)
}
export default App





