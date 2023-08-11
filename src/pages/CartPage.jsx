import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cart.slice";
import ProductInCart from "../components/CartPage/ProductInCart";
import usePurchases from "../hooks/usePurchases";
import "./styles/CartPage.css";

const CartPage = () => {
  const cart = useSelector((reducer) => reducer.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);
  console.log(cart);
  const totalAmount = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);
  const { makeAPurchase } = usePurchases();
  const handlePurchase = () => {
    makeAPurchase();
  };
  return (
    <section className="cartPage__container">
      <div className="cartProduct__container">
        <h2 className="cartProduct-h2">Shopping cart</h2>
        <div>
          {cart.map((prod) => (
            <ProductInCart key={prod.id} prodCart={prod} />
          ))}
        </div>
        <div className="cartPage__container-div">
          <span>Total</span>
          <h3>${totalAmount}</h3>
        </div>
        <footer className="cartPage__footer">
          <button className="cartPage__footer-btn" onClick={handlePurchase}>
            Checkout
          </button>
        </footer>
      </div>
    </section>
  );
};

export default CartPage;
