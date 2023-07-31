import { useRef } from "react"
import { useDispatch } from "react-redux"
import {setTrainerG} from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
   const inputTrainer = useRef()
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const handleSubmit = e => {
     e.preventDefault()
     dispatch(setTrainerG(inputTrainer.current.value.trim()))
     navigate("/pokedex")
    }
  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer</h2>
        <p>To start with the app, give me your trainer</p>
        <form onSubmit={handleSubmit}>
            <input id="inputTrainer" ref={inputTrainer} type="text" />
            <button>Gotta catch`em all!</button>
        </form>
    </div>
  )
}

export default HomePage