import {CATEGORIES_TYPES} from './categories.types'

const CATEGORIES_INITIAL_STATE={
    categories:{},
    isLoading:false,
    error:null,
}
export const categoriesReducer=(state=CATEGORIES_INITIAL_STATE,action={})=>{
    const {type,payload}=action

    switch(type){
      case CATEGORIES_TYPES.FETCH_CATEGORIES_START:
        return {...state,isLoading:true}
        //fetchStart =isLoading:true
      case CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS:
        return {...state,categories:payload,isLoading:false}
        //fetchSuccess {[data]},isLoading:false
      case CATEGORIES_TYPES.FETCH_CATEGORIES_FAILD:
        return {...state,error:payload,isLoading:false}    
        default :return state    
        
    }
}