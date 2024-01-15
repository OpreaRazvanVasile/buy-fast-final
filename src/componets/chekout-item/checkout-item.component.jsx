import {CheckoutItemContainer,
  ImgContainer,
  Image,
  SpanName,
  QuantityContainer,
  Arrow,
  SpanQuantity,
  SpanPrice,
  SpantTotalPrice,
RemoveButton} from "./checkout-item.styles.jsx"

import { useDispatch, useSelector } from "react-redux"
import { cartItemsSelector } from "../../store/cart/cart.selector.js"
import { setAddToCart,setRemoveCartItem,setRemoveItemOnCLick } from "../../store/cart/cart.actions.js"


const CheckoutItem=({item})=>{

   const dispatch=useDispatch()
    const{id,name,imageUrl,quantity,price}=item
     const cartItems=useSelector(cartItemsSelector)
    const incrementHandler=()=>dispatch(setAddToCart(cartItems,item))
    const decrementHandler=()=>dispatch(setRemoveCartItem(cartItems,item))
    const removeItemHandler=()=>dispatch(setRemoveItemOnCLick(cartItems,item))
    return (
    <CheckoutItemContainer key={id}>
         <ImgContainer>
            <Image src={imageUrl} alt={`${name}`}></Image>
            </ImgContainer>   
           
       <SpanName >{name}</SpanName>
       <QuantityContainer>
       <Arrow onClick={decrementHandler}>&#10094;
       </Arrow>
       <SpanQuantity>{quantity}</SpanQuantity>
       <Arrow onClick={incrementHandler} >&#10095;</Arrow>
       </QuantityContainer>
       <SpanPrice> {price}</SpanPrice>
       <SpantTotalPrice>{price*quantity}</SpantTotalPrice>
       <RemoveButton onClick={removeItemHandler}>&#10006;</RemoveButton>

     </CheckoutItemContainer>
    )
}
export default CheckoutItem