import { CURRENT_USER_TYPES } from "./user.types";

 const INITIAL_STATE={
    currnetUser:null,
    
 }
 

 export const userReducer=(state=INITIAL_STATE,action={})=>{
    const {type,payload}=action;
    switch(type){
       case CURRENT_USER_TYPES.SET_CURRENT_USER:
         return{
          ...state,
          currnetUser:payload
         } 
      
      default:return state
    }
 
 
 
 }