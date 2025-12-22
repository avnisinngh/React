import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = 'AvniSinngh'

  return (
    <div>
      <div className="card">
        <h1>Avni Singh: {user}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, natus.</p>
      </div>
      {Card()}
      <Navbar/>
      <Card/>
    </div>
  )
}

export default App
