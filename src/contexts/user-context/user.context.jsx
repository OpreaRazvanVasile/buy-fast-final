
import { createContext,useState,useEffect } from "react";
import {signOutUser } from "../../utils/fierbase/fierbase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { authStateChangedListener } from "../../utils/fierbase/fierbase.utils";


export const UserContext=createContext({
   currnetUser:null,
   setCurrentUser:()=>{},
   isMouseOverEl:false,
   setIsMouseOverEl:()=>{},
})

export const UserProvider=({children})=>{
   const[currnetUser,setCurrentUser]=useState(null)
   const [isMouseOverEl,setIsMouseOverEl]=useState(false)
   const value={currnetUser,setCurrentUser,isMouseOverEl,setIsMouseOverEl}
 
   useEffect(()=>{
      const unsubsribe=authStateChangedListener((users)=>{
        
           setCurrentUser(users)

         
      })
      return unsubsribe
                  

   },[])
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}