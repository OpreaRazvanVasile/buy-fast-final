
import {takeLatest,all,call,put} from 'redux-saga/effects'
import { DIRECTORY_CATEGORIES_TYPES } from "./directory-categories.types";
import { getDocumentFormDB } from '../../utils/fierbase/fierbase.utils';
import { fetchDirectoryCategoriesSuccess,fetchDirectoryCategoriesFaild } from './directory-categories.actions';





 function*fetchDirectoryCategoiresAsync(){

    try {
      const directoryData=yield call(getDocumentFormDB,'directory')
      const sortDirectoryData=directoryData.slice().sort((a,b)=>a.id-b.id)
      yield put(fetchDirectoryCategoriesSuccess(sortDirectoryData))

    }
    catch(error){
      yield put(fetchDirectoryCategoriesFaild(error))
    }

 }

export function*onFetchDirectoryCategories(){
     yield takeLatest(DIRECTORY_CATEGORIES_TYPES.FETCH_DIRECTORY_CATEGORIES_START,fetchDirectoryCategoiresAsync)
}

export function*directoryCategoriesSaga(){
yield all([call(onFetchDirectoryCategories)])
}