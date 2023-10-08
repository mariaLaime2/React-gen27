import "./styles/PokeCardId.css";

const PokeCardId = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <>
      <div className="idPageContainer">
        <section className="idPage__container1">
          <header
            className={`idPage__header ${pokemon?.types[0].type.name}-gradient`}
          >
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
              className="pokeId__img"
            />
          </header>
          <article className="idPage__containerIdNumber">
            <h1
              className={
                "idPage__idNumber ${pokemon?.types[0].type.name}-color"
              }
            >
              #{pokemon?.id}
            </h1>
          </article>
          <article className="idPage__id">
            <h2 className={`idPage__name ${pokemon?.types[0].type.name}-color`}>
              {pokemon?.name}
            </h2>
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
          <article className="idPage__stats">
            <h2 className="idPage__stats-title">Stats </h2>
            <div>
              {pokemon?.stats.map((statInfo) => (
                <div className="pokecard__stat" key={statInfo.stat.url}>
                  <h4 className="pokecard__stat__name">{statInfo.stat.name}</h4>
                  <div className="idPage__stats-div">
                    <div className="porcen ">{statInfo.base_stat}/150</div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
        <section className="idPage__moves">
          <h2 className="idPage__moves-title">Movements</h2>
          <hr />
          <div className="idPage__moves-container">
            {pokemon?.moves.slice(0, 25).map((moveInfo) => (
              <span className="idPage__moves-span" key={moveInfo.move.url}>
                {moveInfo.move.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PokeCardId;
