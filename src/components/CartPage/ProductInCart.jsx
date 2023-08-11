import useCartApi from "../../hooks/useCartApi";
import "./Styles/ProductInCart.css";
const ProductInCart = ({ prodCart }) => {
  const { deleteProductInCart } = useCartApi();
  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id);
  };
  return (
    <article className="productCart__container">
      <header className="productCart__header">
        <img
          className="productCart__header-img"
          src={prodCart.product.images[0].url}
          alt=""
        />
      </header>
      <section className="productCart__section">
        <h3 className="productCart__section-h3">{prodCart.product.title}</h3>
        <span className="productCart__span1">cantidad:</span>
        <span className="productCart__span2">{prodCart.quantity}</span>
        <button className="productCart__section-btn" onClick={handleDeleteCart}>
          <i className="bx bx-trash"></i>
        </button>
      
      <footer className="productCart__footer">
        <span className="productCart__span1">subtotal:</span>
        <span className="productCart__span2">$
          {prodCart.product.price * prodCart.quantity}
        </span>
      </footer>
      </section>
    </article>
  );
};

export default ProductInCart;
