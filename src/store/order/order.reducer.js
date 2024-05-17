import { ORDER_TYPES } from "./order.types"


const ORDER_INITIAL_STATE={
        
       
        orderData:{
            date:'',
            uid:'',
            clientType:'', 
            paymentType:'',
            products:[],
           
            
            
            
           
            
        },
        orderSent:false,

}



export const orderReducer=(state=ORDER_INITIAL_STATE,action)=>{
    const {type,payload}=action


   switch(type){
       case ORDER_TYPES.SET_CLIENT_TYPE:
       
        return {
            ...state,
            orderData:{
                ...state.orderData,
                clientType:payload
            },
            error:null,
            
        }
       case ORDER_TYPES.SET_PAYMENT_TYPE:
       
        return{
            ...state,
    
            orderData:{
                ...state.orderData,
                paymentType:payload
            }
            
            
        } 

        case ORDER_TYPES.SET_ORDER_DATA:
            return{
                ...state,
                orderData:{
                    ...state.orderData,
                    ...payload

                }
            }
        case ORDER_TYPES.SET_PRODUCTS:{
            return{
                ...state,
                orderData:{
                    ...state.orderData,
                    products:payload
                }
            }
        }

        case ORDER_TYPES.SET_TOTAL:{

            return {
                ...state,
                orderData:{
                    ...state.orderData,
                    total:payload

                }

            }
        }
        case ORDER_TYPES.SET_ORDER_UID:
            return{
                ...state,
                orderData:{
                    ...state.orderData,
                    uid:payload
                }
            }
        case ORDER_TYPES.SET_ORDER_SENT:
            return {
                ...state,
                orderSent:true,
            }

        case ORDER_TYPES.SET_ORDER_TO_COLLECTION_FAILD:
            return{
                ...state,
                error:payload,
            }
        case ORDER_TYPES.SET_ORDER_DATE:
            return{
                ...state,
                orderData:{
                    ...state.orderData,
                    date:payload
                }
            }
        case ORDER_TYPES.SET_ORDER_CLEAR:
            return ORDER_INITIAL_STATE
            
        default:
            return state

       

   }

}