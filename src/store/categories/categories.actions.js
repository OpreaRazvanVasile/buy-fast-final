import { createAction } from "../../utils/fierbase/create.action";
import { CATEGORIES_TYPES } from "./categories.types";

export const setCategories=(doc)=>{
  
  return  createAction(CATEGORIES_TYPES.SET_CATEGORIES,doc)
}