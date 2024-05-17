import { createAction } from "../../utils/fierbase/create.action"
import { CART_ITEM_TYPES } from "./cart.types"

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
export const setAddToCart=(cartItems,product)=>{
    const newCartItems=addToCart(cartItems,product)
 return  createAction(CART_ITEM_TYPES.SET_CART_ITEMS,newCartItems)
 }

export  const setRemoveCartItem=(cartItems,product)=>{
    const newCartItems=removeProduct(cartItems,product)
    return createAction(CART_ITEM_TYPES.SET_CART_ITEMS,newCartItems)
 }
export  const setRemoveItemOnCLick=(cartItems,product)=>{
    const newCartItems=removeItemOnClick(cartItems,product)
    return createAction(CART_ITEM_TYPES.SET_CART_ITEMS,newCartItems)
   }

 export const setTotalQuantity=(quantity)=>{
    return createAction(CART_ITEM_TYPES.SET_TOTAL_QUANTITY,quantity)


 }  
 export const setCartTotal=(total)=>createAction(CART_ITEM_TYPES.SET_TOTAL_PRICE,total)

 export const setIsCartOpen=(bolean)=>{
    return createAction(CART_ITEM_TYPES.SET_IS_CART_OPEN,bolean)


 }
  export const clearAllCartItems=()=>createAction(CART_ITEM_TYPES.SET_CLEAR_ALL)
 
