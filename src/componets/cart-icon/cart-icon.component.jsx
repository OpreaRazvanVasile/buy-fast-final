import { CartIconConatiner,ShoppingIconDiv,ItemCount} from './cart-icon.styles'
import { useContext} from 'react'
import { CartContex } from '../../contexts/cart-context/cart-context'

const IconCart=({setCart})=>{
    const {totalQuantity}=useContext(CartContex)
    console.log(totalQuantity)
   

    return(
     <CartIconConatiner onClick={setCart}  className='cart-icon-container'>
        
         <ShoppingIconDiv></ShoppingIconDiv>
         <ItemCount>{totalQuantity}</ItemCount>
         

     
    </CartIconConatiner>
    )
}
export default IconCart