import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainerG } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import "../pages/StylesPages/HomePage.css";
import pokedexImage from "../assets/pokedex-title.png";
import pokedexBaner from "../assets/baner-pokemon.png";

const HomePage = () => {
  const inputTrainer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerG(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };
  return (
    <>
      <div className="homePage__container">
        <div className="homePage__container-img">
          <img src={pokedexImage} alt="" className="homePage__img" />
        </div>
        <div className="homePage__container-description">
          <h2 className="homePage__title">¡Hi Trainer !</h2>
          <p className="homePage__paragraph">
            To start with the app, give me your trainer
          </p>
        </div>
        <div className="homePage__container-form">
          <form onSubmit={handleSubmit} className="homePage__form">
            <input
              className="homePage__form-input"
              id="inputTrainer"
              ref={inputTrainer}
              type="text"
              placeholder="  Your Name..."
            />
            <button className="homePage__form-button">Start</button>
          </form>
        </div>
      </div>
      <footer className="homePage__footer">
      
      <img className="homePage__footer-img" src={pokedexBaner} alt="" />
      </footer>
    </>
  );
};

export default HomePage;
