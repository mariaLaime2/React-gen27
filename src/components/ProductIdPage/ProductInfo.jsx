import { useState } from "react"
import useCartApi from "../../hooks/useCartApi"
import "./styles/ProductInfo.css"


const ProductInfo = ({product}) => {
    const [counter, setCounter] = useState(1)
    const handleMinus =()=>{
    if(counter -1 >= 1){
        setCounter(counter -1)
    }
    }
    const handlePlus =()=> setCounter(counter+1)
    const {addProductInCart} = useCartApi()

    const handleAddCart=()=>{
        const data= {
            quantity:counter,
            productId: product.id
        }
     addProductInCart(data)
    }


  return (
    <article className="productInfo__container">
        <h4 className="productInfo__brand">{product?.brand}</h4>
        <h3 className="productInfo__title">{product?.title}</h3>
        <p className="productInfo__description">{product?.description}</p>
        <div className="productInfo__details">
        <section className="productInfo__details-section">
            <h4 className="productInfo__details-h4">Price</h4>
            <span className="productInfo__details__price">${product?.price}</span>
        </section>
        <section className="productInfo__details-section">
            <h4 className="productInfo__details-h4">Quantity</h4>
            <div className="productInfo__quantity">
                <button className="productInfo__quantity-btn" onClick={handleMinus}>-</button>
                <span className="productInfo__quantity-span">{counter}</span>
                <button className="productInfo__quantity-btn" onClick={handlePlus}>+</button>
            </div>
        </section>
        </div>
        <footer className="productInfo__footer">
            <button className="productInfo__footer-btn" onClick={handleAddCart}>Add to Cart <i className='bx bx-cart-add' ></i> </button>
        </footer>
    </article>
  )
}

export default ProductInfo