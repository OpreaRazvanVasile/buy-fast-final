
import { createAction } from "../../utils/fierbase/create.action"
import { CURRENT_USER_TYPES } from "./user.types"



export const setCurrentUser=(user)=>{
  return  createAction(CURRENT_USER_TYPES.SET_CURRNET_USER,user)
 }
   //SIGN IN CHECK CREATE A PAYLOAD WITH THE USER
   export const chechUserSession=()=>createAction(CURRENT_USER_TYPES.CHECH_USER_SESSION)
   export const signInSucces=(userAuth)=>createAction(CURRENT_USER_TYPES.SIGN_IN_SUCCES,userAuth)
   export const signInFaild=(error)=>createAction(CURRENT_USER_TYPES.SIGN_IN_FAILD,error)

   //SIGN IN METHODS
   export const googleSignInStart=()=>createAction(CURRENT_USER_TYPES.GOOGLE_SIGN_IN_POP_UP_START)
   export const googleRedirectSignInStart=()=>createAction(CURRENT_USER_TYPES.GOOGLE_SIGN_IN_REDIRECT)
   export const signInWithEmailStart=(email,password)=>createAction(CURRENT_USER_TYPES.EMAIL_SIGN_IN_START,{email,password})
   
  //SIGN UP METHODS
   export const signUpStart=(email,password,displayName)=>createAction(CURRENT_USER_TYPES.SIGN_UP_START,{email,password,displayName})
   export const signUpSucces=(user,displayName)=>createAction(CURRENT_USER_TYPES.SIGN_UP_SUCCES,{user,displayName})
   export const signUpFaild=(error)=>createAction(CURRENT_USER_TYPES.SIGN_UP_FAILD,error)


   //SIGN OUT 
   export const signOutStart=()=>createAction(CURRENT_USER_TYPES.SIGN_OUT_START)
   export const signOutSucces=()=>createAction(CURRENT_USER_TYPES.SIGN_OUT_SUCCES)
   export const singOutFaild=(error)=>createAction(CURRENT_USER_TYPES.SIGN_OUT_FAILD,error)  
