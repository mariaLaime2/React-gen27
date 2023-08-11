import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import "./styles/HomePage.css";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });
  const products = useSelector((reducer) => reducer.products);
  const inputName = useRef();
  const handleFilterName = () => {
    setNameValue(inputName.current.value);
  };
  const cbFilter = (prod) => {
    const inputNameLower = nameValue.toLocaleLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    //filter by price
    const price = Number(prod.price);
    const filterPrice = fromTo.from <= price && price <= fromTo.to;
    return filterName && filterPrice;
  };
  return (
    <div className="homePage__container">
      <section className="homePage__section">
        <div className="homePage__section-input">
          <i className="bx bx-search-alt-2"></i>
          <input
            className="homePage__input"
            onChange={handleFilterName}
            value={nameValue}
            type="text"
            ref={inputName}
            placeholder="Whath are you looking for?"
          />
        </div>
        <div className="homePage__fil">
          <FilterCategory />
          <FilterPrice setFromTo={setFromTo} />
        </div>
        <div className="homePage__products">
          {products?.filter(cbFilter).map((prod) => (
            <CardProduct key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
