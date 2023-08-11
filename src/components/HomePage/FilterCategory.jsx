import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import {
  getAllProductsThunk,
  getFilteredProductsThunk,
} from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import "./styles/FilterCategory.css"
const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();
  useEffect(() => {
    getAllCategories("/categories");
  }, []);
  const dispatch = useDispatch();
  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  };
  const handleFilterCategories = id => {
    dispatch(getFilteredProductsThunk(id));
  };
//////////////////////////

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <article onClick={toggleMenu} className={`menu ${isMenuOpen ? "open" : ""}`}>
      <h3 className="category-h3">Category<i className='bx bxs-down-arrow'></i></h3>
      <hr />
      <ul className="category-list">
        <li onClick={handleAllCategories}>All categories</li>
        {categories?.map((category) => (
          <li
            onClick={() => handleFilterCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
