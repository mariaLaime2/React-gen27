import { useRef } from "react"
import { useDispatch } from "react-redux"
import {setTrainerG} from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"
import "../pages/StylesPages/HomePage.css"

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
    <>
    <div className="homePage__container">
         <img src="" alt="" />
        <h2 className="homePage__title">Hi Trainer</h2>
        <p className="homePage__paragraph">To start with the app, give me your trainer</p>
        <form onSubmit={handleSubmit} className="homePage__form">
            <input className="homePage__form-input" id="inputTrainer" ref={inputTrainer} type="text" />
            <button className="homePage__form-button">Gotta catch`em all!</button>
        </form>
        
    </div>
    <footer>

    </footer>
    </>
  )
}

export default HomePage