
import { createAction } from "../../utils/fierbase/create.action"
import { CURRENT_USER_TYPES } from "./user.types"


console.log(CURRENT_USER_TYPES) 
export const setCurrentUser=(user)=>{
  return  createAction(CURRENT_USER_TYPES.SET_CURRENT_USER,user)
 }
