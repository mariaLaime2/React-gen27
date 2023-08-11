import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"
import "./styles/SimilarProduct.css"

const SimilarProducts = ({product}) => {
    const [productsByCategory, getProductsByCategory]=useFetch()
    useEffect(()=>{
        if(product){
            getProductsByCategory(`/products?categoryId=${product.categoryId}`)
        }
    },[product])
    const cbFilter = prod =>{
        if(prod.id !== product.id){
            return prod
        }
    }
  return (
    <div className="similarProduct__container">
    <h3 className="similarProduct__container-title">Discover Similar Products</h3>
    
    

    <div className="similarProducts__container">
        {
            productsByCategory?.filter(cbFilter).map(prod =>(
                <CardProduct
                key={prod.id}
                product={prod}/>
            ))
        }
    </div>
    </div>
  )
}

export default SimilarProducts