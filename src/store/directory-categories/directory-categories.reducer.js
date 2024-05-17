
import { DIRECTORY_CATEGORIES_TYPES } from "./directory-categories.types"

const DIRECTORY_CATEGORIES_INITIAL_STATE={
 directoryData:[],   
 isLoading:false,
 error:null,
 
}

export const directoryCategoriesReducer=(state=DIRECTORY_CATEGORIES_INITIAL_STATE,action=[])=>{
    const {type,payload}=action

    switch(type){
        case DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_START:
          return {...state,isLoading:true}
        case DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_SUCCES:
            return {...state,directoryData:payload,isLoading:false}
        case DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_FAILD:
            return {...state,error:payload,isLoading:false}     
        default: return state       
    }

}
