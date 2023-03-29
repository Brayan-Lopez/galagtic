import { useState } from 'react'
import './App.css'
import ContainerQuote from './components/ContainerQuote'

import db from "./db/db.json"

function App() {

  const backgrouns = ['ig1', 'ig2', 'ig3', 'ig4']
  const planets = ['planet1', 'planet2', 'planet3', 'planet4']
  
  const getRandoItem = (listItems) => {
    const randomIndex = Math.floor(Math.random()* listItems.length)
    return listItems[randomIndex]
  }

  const [quote, setQuote] = useState(getRandoItem(db))

  const handleNewCuote = () => {
    setQuote(getRandoItem(db))
    setBackground(getRandoItem(backgrouns))
    setPlanet(getRandoItem(planets))
  }

  const [background, setBackground] = useState(getRandoItem(backgrouns))

  const [planet, setPlanet] = useState(getRandoItem(planets))

  return (
    <div className={`App ${background}`}>
      <div className='imagePlanet'>
        <img className={`planets ${planet}`} src={`/images/${planet}.png`} />
      </div>
      <ContainerQuote quote={quote} handleNewCuote={handleNewCuote}/>
    </div>
  )
}

export default App
