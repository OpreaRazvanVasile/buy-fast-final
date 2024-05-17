import Button from '../button/button.component'
import {ProductCarTConatiner,SpanName,SpanPrice,ProductFooter} from'./product-item.styles.jsx'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { cartItemsSelector,cartTotalPriceSelector,cartTotalQunatitySelector} from '../../store/cart/cart.selector.js'
import { setAddToCart ,setTotalQuantity,setCartTotal} from '../../store/cart/cart.actions.js'
import { useEffect } from 'react'






const ProductItem=({product})=>{
  const {name,imageUrl,price}=product
     

    const dispatch=useDispatch()
    const cartItems=useSelector(cartItemsSelector)
    const totalQuantity=useSelector(cartTotalQunatitySelector)
    const totalPrice=useSelector(cartTotalPriceSelector)
    
  
    useEffect(()=>{
      dispatch(setCartTotal(totalPrice))
    },[totalPrice]) 

    useEffect(()=>{
      dispatch(setTotalQuantity(totalQuantity))

    },[totalQuantity])
     
    
      const addProduct=()=>{
       
          dispatch(setAddToCart(cartItems,product))
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