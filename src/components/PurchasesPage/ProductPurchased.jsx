import "./Styles/ProductPurchased.css"

const ProductPurchased = ({purchase}) => {
  return (
   <article className="productPurchased__container">
    <section className="productPurchased__section">
    <header className="productPurchased__header">
      <img className="productPurchased__img" src={purchase.product.images[0].url} alt=""/>
    </header>
    <h3 className="productPurchased__section-h3">{purchase.product.title}</h3>
    <div className="productPurchased__section-div">{purchase.quantity}</div>
    <div className="productPurchased__section-div2">
      ${purchase.quantity*purchase.product.price}
    </div>
    </section>
   </article>
  )
}

export default ProductPurchased