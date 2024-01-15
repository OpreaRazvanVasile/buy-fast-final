
import { createAction } from "../../utils/fierbase/create.action"
import { CURRENT_USER_TYPES } from "./user.types"



export const setCurrentUser=(user)=>{
  return  createAction(CURRENT_USER_TYPES.SET_CURRENT_USER,user)
 }
