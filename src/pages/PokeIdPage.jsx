import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../pages/StylesPages/PokeIdPage.css";

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
      <div className="idPage__container">
        <div className="idPage__container-img">
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
            className="pokeId__img"
          />
        </div>
        <article className="idPage__id">
          <h1 className="idPage__idNumber">#{pokemon?.id}</h1>
          <h2 className="idPage__name">{pokemon?.name}</h2>
        </article>
        <article className="idPage__description">
          <p className="idPage__description-p">
            <span className="idPage__description-span">Height</span>
            {pokemon?.height}
          </p>
          <p className="idPage__description-p">
            <span className="idPage__description-span">Weight</span>
            {pokemon?.weight}
          </p>
        </article>
        <div className="idPage__ability__container">
          <article className="idPage__ability">
            <h3 className="idPage__ability-title">Abilities</h3>
            <p className="idPage__abilities-p">
              {pokemon?.abilities[0].ability["name"]}
            </p>
            <p className="idPage__abilities-p">
              {pokemon?.abilities[1].ability["name"]}
            </p>
          </article>
          <article className="idPage__type">
            <h3 className="idPage__ability-title">Type</h3>
            <p className="idPage__type-p">{pokemon?.types[0].type["name"]}</p>
            <p className="idPage__type-p">{pokemon?.types[1].type["name"]}</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default PokeIdPage;
