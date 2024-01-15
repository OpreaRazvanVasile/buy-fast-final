import {CheckoutContainer,CheckoutHeader,HeaderBlock,SpanTotal,OrderBtnContainer}from'./checkout.styles.jsx'

import CheckoutItem from '../../componets/chekout-item/checkout-item.component'
import { cartItemsSelector,cartTotalPriceSelector,cartTotalQunatitySelector } from '../../store/cart/cart.selector.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCartTotal,setTotalQuantity } from '../../store/cart/cart.actions.js'

const Checkout=()=>{
     const dispatch=useDispatch()
     const cartItems=useSelector(cartItemsSelector)
     const totalPrice=useSelector(cartTotalPriceSelector)
     const totalQuantity=useSelector(cartTotalQunatitySelector)
     useEffect(()=>dispatch(setCartTotal(totalPrice)),[totalPrice])
     useEffect(()=>dispatch(setTotalQuantity(totalQuantity)),[totalQuantity])

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