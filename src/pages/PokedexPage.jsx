import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import "../pages/StylesPages/PokedexPage.css";
import pokemon from "../assets/pokemon.png";
const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("allPokemons");
  const trainer = useSelector((reducer) => reducer.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=600";
  const [pokemons, getAllPokemons, getAllPokemonsByType] = useFetch(url);
  useEffect(() => {
    if (selectValue === "allPokemons") {
      getAllPokemons();
    } else {
      getAllPokemonsByType(selectValue);
    }
  }, [selectValue]);
  const inputSearch = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };
  const cbFilter = (poke) => poke.name.includes(inputValue);
  return (
    <>
      
      <img src={pokemon} alt="" className="pokedex__page-head" />
      <div className="pokedexPage__container">
        <div className="pokedexPage__description">
          <p className="pokedexPage__description-p">
            <span className="pokedexPage__description-span">
              Welcome {trainer}
            </span>
            , here you can find your favorite pokemon.
          </p>
        </div>
        <div className="pokedex__forms">
          <form onSubmit={handleSubmit} className="pokedex__form">
            <input
              ref={inputSearch}
              type="text"
              className="pokedex__form-input"
              placeholder="serch a pokemon"
            />
            <button className="pokedex__form-button">serch</button>
          </form>
          <SelectType
            setSelectValue={setSelectValue}
            className="pokedex__form-select"
          />
        </div>
        <div className="pokedexPage__cards">
          {pokemons?.results.filter(cbFilter).map((poke) => (
            <PokeCard key={poke.url} url={poke.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokedexPage;
