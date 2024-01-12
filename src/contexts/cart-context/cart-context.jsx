import { useState,createContext,useEffect, useReducer } from "react";

const addToCart=(cartItems,product)=>{
       const existingCardItem=cartItems.find(item=>item.id===product.id)
     
     if(existingCardItem){
        return cartItems.map(item=>{
           if(item.id===product.id){
            item.quantity+=1
            return item
           }
           else{
             return item
           }
       
        }
        
           
       )
    }
      
     return [...cartItems,{...product,quantity:1}]
     

   


 }


 const removeProduct=(cartItems,product)=>{
   const existingCardItem=cartItems.find(item=>item.id===product.id)

   for(let i=0;i<cartItems.length;i++){
      if(cartItems[i].quantity===1){
         if(cartItems[i].id===product.id){

            cartItems.splice(i,1)
      
         }
      }
    }

   if(existingCardItem){
    
      return cartItems.map(item=>{
         if(item.id===product.id){
          item.quantity-=1
          return item
         }
         else{
           return item
         }
     
      }
      
         
     )
  }
    
   return [...cartItems,{...product,quantity:1}]

 }

 const removeItemOnClick=(cartItems,product)=>{
   for(let i=0;i<cartItems.length;i++){
      
         if(cartItems[i].id===product.id){

            cartItems.splice(i,1)
      
         }
      
    }
    return [...cartItems]

 }
export const CartContex=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    setCartItem:()=>{},
    setAddToCart:()=>{},
    totalQuantity:0,
    setTotalQuantity:()=>{},
    totalPrice:0,
    setTotalPrice:()=>{},
    
    

   
   
    
})


const CART_ITEM_TYPES={
   SET_CART_ITEMS:'SET_CART_ITEMS',
   SET_TOTAL_QUANTITY:'SET_TOTAL_QUANTITY',
   SET_TOTAL_PRICE:'SET_TOTAL_PRICE'
}
const INITIAL_CART_STATE={
   cartItems:[],
   totalQuantity:0,
   totalPrice:0,
}
const cartReducer=(state,action)=>{
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
   default:throw new Error(`The type ${type} in cartReducer its not correct`)   
}
}


export const CartProvaider=({children})=>{

   const[isCartOpen,setIsCartOpen]=useState(false)
   const[{cartItems,totalQuantity,totalPrice},dipatch] =useReducer(cartReducer,INITIAL_CART_STATE)
   
   const setAddToCart=(cartItems,product)=>{
      const newCartItems=addToCart(cartItems,product)
   return  dipatch({type:CART_ITEM_TYPES.SET_CART_ITEMS,payload:newCartItems})
   }
   const setRemoveCartItem=(cartItems,product)=>{
      const newCartItems=removeProduct(cartItems,product)
      return dipatch({type:CART_ITEM_TYPES.SET_CART_ITEMS,payload:newCartItems})
   }
   const setRemoveItemOnCLick=(cartItems,product)=>{
      const newCartItems=removeItemOnClick(cartItems,product)
      return dipatch({type:CART_ITEM_TYPES.SET_CART_ITEMS,payload:newCartItems})
     }
   
  const setTotalQuantity=()=>{
     const quantity=cartItems.reduce((acc,item)=>acc+item.quantity,0)
     return dipatch({type:CART_ITEM_TYPES.SET_TOTAL_QUANTITY,payload:quantity})

  }

 

  useEffect(()=>{
   const total=cartItems.reduce((acc,item)=>acc+(item.price*item.quantity),0)
   dipatch({type:CART_ITEM_TYPES.SET_TOTAL_PRICE,payload:total})
  },[cartItems])
 
  useEffect(()=>{
   const quantity=cartItems.reduce((acc,item)=>acc+item.quantity,0)
   dipatch({type:CART_ITEM_TYPES.SET_TOTAL_QUANTITY,payload:quantity})
  },[cartItems])

   return <CartContex.Provider value={{
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setAddToCart,
    setRemoveCartItem,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setRemoveItemOnCLick

}}>{children}</CartContex.Provider>
}



