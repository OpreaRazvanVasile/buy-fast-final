
import { createAction } from "../../utils/fierbase/create.action";
import { DIRECTORY_CATEGORIES_TYPES } from "./directory-categories.types";

export const fetchDirectoryCategoriesStart=()=>createAction(DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_START)
export const fetchDirectoryCategoriesSuccess=(data)=>createAction(DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_SUCCES,data)
export const fetchDirectoryCategoriesFaild=(err)=>createAction(DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_FAILD,err)
