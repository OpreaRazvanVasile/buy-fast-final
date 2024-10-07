import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { OrderSentTitle } from "./order-sent.styles"
import {useDispatch } from "react-redux"
import { setOrdersToColectionStart } from "../../store/order/order.action"
import { orderDataReducer } from "../../store/order/order.selector"
import { clearAllCartItems } from "../../store/cart/cart.actions"
import { useEffect } from "react"
import { setClearTheOrderData } from "../../store/order/order.action"



const OrderWasSent=()=>{
    const dispatch=useDispatch()
    const orderData=useSelector(orderDataReducer)
    
 
    const data={...orderData}
   

    useEffect(()=>{
    
        dispatch(setOrdersToColectionStart(data))
      
    },[])

    useEffect(()=>{
     
         dispatch(clearAllCartItems())

    },[])

    const nav=useNavigate()
    setTimeout(()=>{
        {
            nav('/shop')
            dispatch(setClearTheOrderData())

        }
       
    },4000)
  
     return(
     
     
      <div>
        <OrderSentTitle>Order Complate</OrderSentTitle>
     </div>
    
    
     )
     
   
   
}
export default OrderWasSent