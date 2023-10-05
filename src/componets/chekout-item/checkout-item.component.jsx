import './checkout-item.styles.scss'
import { CartContex } from '../../contexts/cart-context/cart-context'
import { useContext } from 'react'

const CheckoutItem=({item})=>{
    const{id,name,imageUrl,quantity,price}=item
    const {cartItems,setAddToCart,setRemoveCartItem,setRemoveItemOnCLick}=useContext(CartContex)

    const incrementHandler=()=>setAddToCart(cartItems,item)
    const decrementHandler=()=>setRemoveCartItem(cartItems,item)
    const removeItemHandler=()=>setRemoveItemOnCLick(cartItems,item)
    return (
    <div key={id} className="checkout-item-container">
         <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            </div>   
           
       <span className='name'>{name}</span>
       <div className='quantity'>
       <div onClick={decrementHandler} className='arrow'>&#10094;
       </div>
       <span className='value'>{quantity}</span>
       <div onClick={incrementHandler} className='arrow'>&#10095;</div>
       </div>
       <span className='price'>{price}</span>
       <span className='total-price'>{price*quantity}</span>
       <div onClick={removeItemHandler} className='remove-button'>&#10006;</div>

     </div>
    )
}
export default CheckoutItem