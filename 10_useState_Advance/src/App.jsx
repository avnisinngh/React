import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'avni', age:20})
  const btnClick=()=>{
    // destructuring 
    // setNum(prev => ({...prev,age:50}))
    const newNum = {...num};
    newNum.user = 'Ahaan'
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClick}>click</button>
    </div> 
  )
}

export default App