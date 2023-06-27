

import { useState } from 'react'
import './App.css'
import PhrasesCard from './components/PhrasesCard/PhrasesCard'
import phrases from "./data/phrases.json"
import {getRandomNumber} from "./utils/getRandom"
import { Button } from './components/Button/Button'
import Author from './components/Author/Author'


const backroundImgs=["fondo1.png", "fondo2.png","fondo3.png", "fondo4.png"]
function App() {
  const randomPhrase= ()=>phrases[getRandomNumber(phrases.length -1)]
  const randomImg= ()=>backroundImgs[getRandomNumber(backroundImgs.length -1)]
  const [backroundImg, setBackroundImg] = useState(randomImg())
  const [phrase, setPhrase] = useState(randomPhrase())
  const changePhrase=()=>{
    let newPhrase= randomPhrase();
    let newBackround= randomImg();
    while (newPhrase== phrase) {
     newPhrase= randomPhrase();
    }
    while(newBackround=== backroundImg){
      newBackround=randomImg()
    }
    setPhrase(newPhrase)
    setBackroundImg(newBackround)
  }



  return (
    <section className='container_app' style={{backgroundImage:`url("${backroundImg}")`}}>

     <h1 className='title'><b>GALLETAS DE LA FORTUNA</b></h1>
    
     <Button handleClick={changePhrase} />
     <PhrasesCard data={phrase}/>
     <Author  author= {phrase}/>

    
     
      
    </section>
  )
}

export default App
