import { CART_ITEM_TYPES } from "./cart.types";

const INITIAL_CART_STATE={
    cartItems:[],
    //[{}]
    totalQuantity:0,
    //10
    totalPrice:0,
    //100
    isCartOpen:false,
 }


 export const cartReducer=(state=INITIAL_CART_STATE,action={})=>{
    const {type,payload}=action
    
    switch(type){
       case CART_ITEM_TYPES.SET_CART_ITEMS:
          return {
             ...state,
             cartItems:payload
             
          }
       case CART_ITEM_TYPES.SET_TOTAL_QUANTITY:
          return {
             ...state,
             totalQuantity:payload
          }   
       case CART_ITEM_TYPES.SET_TOTAL_PRICE:
          return{
             ...state,
             totalPrice:payload
          }   
       case CART_ITEM_TYPES.SET_IS_CART_OPEN:
         return {
            ...state,
            isCartOpen:payload
         }   
       case CART_ITEM_TYPES.SET_CLEAR_ALL:
         return{
            ...state,
            cartItems:[]
         }  
       default:return state   
    }
    }
    