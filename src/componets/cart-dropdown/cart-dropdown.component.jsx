

import {useContext} from 'react'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router'
import { CartDropdownConatiner,ButtonStyle,CartItems } from './cart-dropdown.styles'
import { cartItemsSelector,isCartOpenSelector} from '../../store/cart/cart.selector'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.actions'


const CartDropdown=()=>{
    const dispatch=useDispatch()
    const cartItems=useSelector(cartItemsSelector)
    const checkoutNavigation=useNavigate()
  
  
    const goToCheckoutHandler=()=>{

        dispatch(setIsCartOpen(false))
        checkoutNavigation('/checkout')
    }
    
  


    return (
      
        <CartDropdownConatiner>
         <CartItems>
          {cartItems.map(item=><CartItem key={item.id} item={item}/>)}
          </CartItems>
          <ButtonStyle onClick={goToCheckoutHandler}>Go To Checkout</ButtonStyle>
          </CartDropdownConatiner>

          
    )

}

export default CartDropdown