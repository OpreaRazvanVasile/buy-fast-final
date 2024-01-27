
import OrderNotSent from "../order-not-sent/orderNotSent.componet"
import OrderWasSent from "../order-sent/order-sent.componet"
import { isOrderSentSelector } from "../../store/order/order.selector"
import { useSelector } from "react-redux"


export const OrderForm=()=>{
    const isOrderSent=useSelector(isOrderSentSelector)
   

 if(isOrderSent===false) return <OrderNotSent/>
 else return <OrderWasSent/>


 
}