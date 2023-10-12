import getRandomNumber from "../utils/getRandomNumber";
import "./styles/FormLocation.css";

const FormLocation = ({ setIdLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputLocation.value.trim();
    if (inputValue === "" || inputValue === "0") {
      setIdLocation(getRandomNumber(126));
    } else {
      setIdLocation(inputValue);
    }
    e.target.inputLocation.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="inputLocation" type="text" className="form__input" placeholder="Id from 0 to 160"/>
      <button className="form__button">search</button>
    </form>
  );
};

export default FormLocation;
