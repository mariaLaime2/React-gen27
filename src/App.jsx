

import { useState } from 'react'
import './App.css'
import PhrasesCard from './components/PhrasesCard/PhrasesCard'
import phrases from "./data/phrases.json"
import {getRandomNumber} from "./utils/getRandom"
import { Button } from './components/Button/Button'

function App() {
  const randomPhrase= ()=>phrases[getRandomNumber(phrases.length -1)]
  const [phrase, setPhrase] = useState(randomPhrase())
  const changePhrase=()=>{
    let newPhrase= randomPhrase();
    while (newPhrase== phrase) {
     newPhrase= randomPhrase();
    }
    setPhrase(newPhrase)
  }

  return (
    <>
     <h1>Galletas de la fortuna</h1>
     <Button handleClick={changePhrase} />
     <PhrasesCard data={phrase}/>
     <p><b>Fuente:</b>{randomPhrase.author}</p>
     
      
    </>
  )
}

export default App
