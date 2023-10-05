import './cart-dropdown.styles.scss'

import {useContext} from 'react'
import { CartContex } from '../../contexts/cart-context/cart-context'
import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { useNavigate } from 'react-router'



const CartDropdown=()=>{
    const {cartItems,setIsCartOpen}=useContext(CartContex)
    const checkoutNavigation=useNavigate()
    const goToCheckoutHandler=()=>{
        setIsCartOpen(false)
        checkoutNavigation('/checkout')
    }
    
  


    return (
      
        <div className='cart-dropdown-container'>
         <div className='cart-items' >
          {cartItems.map(item=><CartItem item={item}/>)}
          </div>
          <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
          </div>

          
    )

}

export default CartDropdown