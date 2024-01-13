import Button from '../button/button.component'
import {ProductCarTConatiner,SpanName,SpanPrice,ProductFooter} from'./product-item.styles.jsx'
import { useContext } from "react"
import { CartContex } from "../../contexts/cart-context/cart-context"

const ProductItem=({product})=>{
  const {name,imageUrl,price}=product
     const{cartItems,setAddToCart}=useContext(CartContex)


   
     const addProduct=()=>{
        
         setAddToCart(cartItems,product)
     }
             
            
            
            
        
         
     
    return (
        <ProductCarTConatiner>
            <img src={imageUrl} alt={name}></img>
            <ProductFooter>
             <SpanName>{name}</SpanName>    
            <SpanPrice>{price}</SpanPrice>
            </ProductFooter>
            
            <Button  typebutton='inverted' onClick={addProduct}>Add to Card</Button> 

        </ProductCarTConatiner>
    )
}


export default ProductItem