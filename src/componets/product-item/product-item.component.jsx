import Button from '../button/button.component'
import './product-item.styles.scss'
import { useContext } from "react"
import { CartContex } from "../../contexts/cart-context/cart-context"

const ProductItem=({product})=>{
  const {name,imageUrl,price}=product
     const{cartItems,setAddToCart}=useContext(CartContex)


   
     const addProduct=()=> setAddToCart(cartItems,product)
             
            
            
            
        
         
     
    return (
        <div  className="product-card-container">
            <img src={imageUrl} alt={name}></img>
            <div className="footer">
             <span className="name">{name}</span>    
            <span className="price">{price}</span>
            </div>
            
            <Button  typeButton='inverted' onClick={addProduct}>Add to Card</Button> 

        </div>
    )
}


export default ProductItem