import {ReactComponent as ShoppingIcon} from   './shopping-bag.svg'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart-context/cart-context'
import './cart-icon.styles.scss'
const IconCart=({setCart})=>{
    const {totalQuantity}=useContext(CartContex)

    return(
     <div onClick={setCart}  className='cart-icon-container'>
         <ShoppingIcon className='shopping-icon'>
         </ShoppingIcon>
         <span className='item-count'>{totalQuantity}</span>
         

     
    </div>
    )
}
export default IconCart