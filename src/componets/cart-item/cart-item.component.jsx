
import { CartItemContainer,Img,ItemDetails,SpanName,Span,SpanPriceTotal } from './cart-item.styles.jsx'
const CartItem=({item})=>{
const{id,name,imageUrl,quantity,price}=item

  return ( <CartItemContainer key={id}> 
  
   <Img src={imageUrl} alt={name}></Img>
   <ItemDetails>
    <SpanName>{name}</SpanName>
    <Span>Quantity:{quantity}</Span>
    <Span>Price:{price}</Span>
    <SpanPriceTotal>Total Price:{price*quantity}</SpanPriceTotal>
    </ItemDetails> 

  </CartItemContainer>)
}
export default CartItem