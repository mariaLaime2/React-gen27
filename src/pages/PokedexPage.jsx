import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("allPokemons")
  const trainer = useSelector((reducer) => reducer.trainer);
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=600";
  const [pokemons, getAllPokemons,getAllPokemonsByType] = useFetch(url);
  useEffect(() => {
    if(selectValue === "allPokemons"){

      getAllPokemons();
    } else{
      getAllPokemonsByType(selectValue)
    }
  }, [selectValue]);
  const inputSearch = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };
  const cbFilter = (poke) => poke.name.includes(inputValue)
    ;
  return (
    <div>
      <p>
        <span>Welcome {trainer}</span>,here you can find your favorite pokemon.
      </p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>serch</button>
      </form>
      <SelectType setSelectValue={setSelectValue}/>
      <div>
        {pokemons?.results.filter(cbFilter).map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
