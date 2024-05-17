import { CartIconConatiner,ShoppingIconDiv,ItemCount} from './cart-icon.styles'
import { cartTotalQunatitySelector } from '../../store/cart/cart.selector'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.actions'

const IconCart=({setCart})=>{
   
    const totalQuantity=useSelector(cartTotalQunatitySelector)

    

   

    return(
     <CartIconConatiner onClick={setCart}  className='cart-icon-container'>
        
         <ShoppingIconDiv></ShoppingIconDiv>
         <ItemCount>{totalQuantity}</ItemCount>
         

     
    </CartIconConatiner>
    )
}
export default IconCart