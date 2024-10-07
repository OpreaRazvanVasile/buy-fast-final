import { CURRENT_USER_TYPES } from "./user.types";

 const INITIAL_USER_STATE={
    currnetUser:null,
    isLoading:false,
    error:null,
    adminAuth:false,
    
 }
 

 export const userReducer=(state=INITIAL_USER_STATE,action={})=>{
    const {type,payload}=action;
    switch(type){
      //is Use LogIN?

      case CURRENT_USER_TYPES.CHECH_USER_SESSION:
         return{
            ...state,
            isLoading:true
         }

       case CURRENT_USER_TYPES.SIGN_IN_SUCCES:
       
         return{
          ...state,
          currnetUser:payload,
          isLoading:false,
         } 
         case CURRENT_USER_TYPES.SIGN_IN_FAILD:
         case CURRENT_USER_TYPES.SIGN_UP_FAILD:
         case CURRENT_USER_TYPES.SIGN_OUT_FAILD:
        
            return{
               ...state,
               error:payload,
               isLoading:false,
            }
        case CURRENT_USER_TYPES.ADMIN_AUTH_SUCCESS:{
         return{
            ...state,
            adminAuth:true,
         }
        }   
        case CURRENT_USER_TYPES.SIGN_OUT_SUCCES:
         return{
            ...state,
            currnetUser:null,
            adminAuth:false,
         }
         
            
       
      default:return state
    }
 
 
 
 }