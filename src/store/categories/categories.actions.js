import { createAction } from "../../utils/fierbase/create.action";
import { CATEGORIES_TYPES } from "./categories.types";
import { getDocumentFormDB } from "../../utils/fierbase/fierbase.utils";

 export const fetchCategoriesStart=()=>{
  
  return  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START)

}

 export const fetchCategoriesFaild=()=>createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILD)
 
export const fetchCategoiresSuccess=(categoriesArray)=>
createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)

export const fetchCategoiresAsync=async(dispatch)=>{

  dispatch(fetchCategoriesStart())
  try{
    const categoriesArray= await getDocumentFormDB('categories')
   dispatch(fetchCategoiresSuccess(categoriesArray)) 

  }
  catch(error){
   dispatch(fetchCategoriesFaild(error))
   
  }
}


