import { useState,createContext,useEffect } from "react";

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

export const CartProvaider=({children})=>{

   const[isCartOpen,setIsCartOpen]=useState(false)
   const[cartItems,setCartItems]=useState([])
   const [totalQuantity,setTotalQuantity]=useState(0)
   const [totalPrice,setTotalPrice]=useState(0)

   useEffect(()=>{
      setTotalQuantity(()=>{
         return cartItems.reduce((acc,item)=>acc+item.quantity,0)

      })

   },[cartItems])

   useEffect(()=>{
    setTotalPrice(()=>{
      return  cartItems.reduce((acc,item)=>acc+(item.price*item.quantity),0)

    })
   },[cartItems])
   const setAddToCart=(cartItems,product)=>{
    return setCartItems(addToCart(cartItems,product))
    
  
   }
   const setRemoveCartItem=(cartItems,product)=>{
      return setCartItems(removeProduct(cartItems,product))
   }
  const setRemoveItemOnCLick=(cartItems,product)=>{
   return setCartItems(removeItemOnClick(cartItems,product))
  }


   return <CartContex.Provider value={{
    isCartOpen,setIsCartOpen,
    cartItems,
    setAddToCart,
    setRemoveCartItem,
    totalQuantity,
    setTotalPrice,totalPrice,
    setRemoveItemOnCLick

}}>{children}</CartContex.Provider>
}
