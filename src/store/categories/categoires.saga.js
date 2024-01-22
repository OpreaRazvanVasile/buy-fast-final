import {takeLatest,all,call,put} from 'redux-saga/effects'
import { CATEGORIES_TYPES } from './categories.types'

import { fetchCategoiresSuccess,fetchCategoriesFaild } from './categories.actions'
import { getDocumentFormDB } from '../../utils/fierbase/fierbase.utils'


export function *fetchCategoiresAsync(){
    try{
        
        const categoriesArray=yield call(getDocumentFormDB,'categories')
       
        yield put(fetchCategoiresSuccess(categoriesArray))
        
    }
    catch(error){
       yield  put(fetchCategoriesFaild(error))
    }



 }

 export  function*onFetchCategories(){
    yield takeLatest(CATEGORIES_TYPES.FETCH_CATEGORIES_START,fetchCategoiresAsync)

}
export function*categoriesSaga(){
    yield all([call(onFetchCategories)])

}