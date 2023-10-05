import './checkout.styles.scss'
import { CartContex } from "../../contexts/cart-context/cart-context"
import { useContext } from "react"
import CheckoutItem from '../../componets/chekout-item/checkout-item.component'

const Checkout=()=>{
    const {cartItems,totalPrice}=useContext(CartContex)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                
                </div>
                <div className="header-block">
                <span>Description</span>
                    
                </div>
                <div className="header-block">
                <span>Quantity</span>
                </div>
                <div className="header-block">
                <span>Price</span>
                </div>
                <div className="header-block">
                <span>Total</span>
                </div>
                
                <div className="header-block">
                <span>Remove</span>
                </div>

            </div>
         {cartItems.map(item=>{
            const{id,name,imageUrl,quantity,price}=item
            if(item){
                  return(<CheckoutItem item={item}/>)
            }
                
            
         })}
         <span className='total'>Total:{totalPrice} Ron</span>
        </div>
    )
}
export default Checkout