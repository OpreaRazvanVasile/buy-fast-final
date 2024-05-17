import {all,call} from 'redux-saga/effects'
import { categoriesSaga } from './categories/categoires.saga'
import { directoryCategoriesSaga } from './directory-categories/directory-categories-saga'
import { userSagas } from './user/user.saga'
import { orderSagas } from './order/order.saga'

export function*rootSaga(){
  yield  all([call(categoriesSaga),
    call(directoryCategoriesSaga),
    call(userSagas),
    call(orderSagas)
  ]
    
    )
 

}