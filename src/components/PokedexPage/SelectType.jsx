import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./styles/SelectType.css";

const SelectType = ({ setSelectValue }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);
  useEffect(() => {
    getAllTypes();
  }, []);
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <select onChange={handleChange} className="SelectType__container">
      <option value="allPokemons" className="SelectType__option">
        All Pokemons
      </option>
      {types?.results.map((type) => (
        <option key={type.url} value={type.url} className="SelectType__options">
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;
