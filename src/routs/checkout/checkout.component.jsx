import {CheckoutContainer,CheckoutHeader,HeaderBlock,SpanTotal,OrderBtnContainer}from'./checkout.styles.jsx'
import { CartContex } from "../../contexts/cart-context/cart-context"
import { useContext } from "react"
import CheckoutItem from '../../componets/chekout-item/checkout-item.component'

const Checkout=()=>{
  
    const {cartItems,totalPrice}=useContext(CartContex)
    return (
        <>
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                
                </HeaderBlock>
                <HeaderBlock>
                <span>Description</span>
                    
                </HeaderBlock>
                <HeaderBlock>
                <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Total</span>
                </HeaderBlock>
                
                <HeaderBlock>
                <span>Remove</span>
                </HeaderBlock>

            </CheckoutHeader>
         {cartItems.map(item=>{
            const{id}=item
            if(item){
                  return(<CheckoutItem key={id} item={item}/>)
            }
                
            
         })}
         <SpanTotal>Total:{totalPrice}  $  
         
         </SpanTotal>
         
         
        
        
        </CheckoutContainer>
     
         </>
    )
}
export default Checkout