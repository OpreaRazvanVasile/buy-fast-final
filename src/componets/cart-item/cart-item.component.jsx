import './cart-item.styles.scss'

const CartItem=({item})=>{
const{id,name,imageUrl,quantity,price}=item

  return ( <div key={id} className="cart-item-container"> 
  
   <img src={imageUrl} alt={name}></img>
   <div className="item-details">
    <span className="name">{name}</span>
    <span className="quantity">Quantity:{quantity}</span>
    <span className="price">Price:{price}</span>
    <span className="price-total">Total Price:{price*quantity}</span>
    </div> 

  </div>)
}
export default CartItem