import {all,call} from 'redux-saga/effects'
import { categoriesSaga } from './categories/categoires.saga'
import { directoryCategoriesSaga } from './directory-categories/directory-categories-saga'

export function*rootSaga(){
  yield  all([call(categoriesSaga),call(directoryCategoriesSaga)])
 

}