import { createAction } from "../../utils/fierbase/create.action";
import { CATEGORIES_TYPES } from "./categories.types";


 export const fetchCategoriesStart=()=>{
  
  return  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START)

}

 export const fetchCategoriesFaild=(error)=>createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILD,error)
 
export const fetchCategoiresSuccess=(categoriesArray)=>
createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray)

// export const fetchCategoiresAsync=async(dispatch)=>{

//   dispatch(fetchCategoriesStart())
//   try{
//     const categoriesArray=await getDocumentFormDB('categories')
    
//    dispatch(fetchCategoiresSuccess(categoriesArray)) 

//   }
//   catch(error){
  
//   return dispatch(fetchCategoriesFaild(error))
   
//   }
// }


