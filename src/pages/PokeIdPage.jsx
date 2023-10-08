import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./StylesPages/PokeIdPage.css";
import pokemons from "../assets/pokemon.png";
import PokeCardId from "../components/PokedexPage/PokeCardId";
const PokeIdPage = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const [pokemon, getSinglePokemon] = useFetch(url);
  useEffect(() => {
    getSinglePokemon();
  }, [id]);
  console.log(pokemon);
  return (
    <>
      <img src={pokemons} alt="" />
      <div className="idPage__container-cards">
        <PokeCardId pokemon={pokemon} />
      </div>
    </>
  );
};

export default PokeIdPage;
