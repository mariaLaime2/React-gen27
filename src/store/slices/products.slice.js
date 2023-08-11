import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductG: (state, action) => action.payload,
  },
});
export const { setProductG } = productSlice.actions;
export default productSlice.reducer;
export const getAllProductsThunk = () => (dispatch) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
  axios
    .get(url)
    .then((resp) => dispatch(setProductG(resp.data)))
    .catch((error) => console.log(error));
};
export const getFilteredProductsThunk = (id) => (dispatch) => {
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
  axios
    .get(url)
    .then((resp) => dispatch(setProductG(resp.data)))
    .catch((error) => console.log(error));
};
