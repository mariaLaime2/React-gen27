
import { useState } from 'react'
import './App.css'
import PhrasesCard from './components/PhrasesCard'
import phrases from "./data/phrases.json"
import random from "./utils/getRandom"

function App() {
  console.log(phrases)
  const [change, setchange] = useState(random)
  const hanldleClick =()=>{
     
  }

  return (
    <>
      <PhrasesCard />
      <button onClick={hanldleClick}></button>
    </>
  )
}

export default App
