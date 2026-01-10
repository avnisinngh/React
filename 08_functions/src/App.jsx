import React from 'react'

const App = () => {
  
  return (
    <div>
      <div onMouseMove={()=>{
            console.log('hellow')
        }}
        className="box"></div>
    </div>
  )
}

export default App