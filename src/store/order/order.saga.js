import { takeLatest,put,call,all } from "redux-saga/effects";

import { ORDER_TYPES } from "./order.types";

import { orderToDbSucces,orderToDbFaild } from "./order.action";
import { addOrdersColectionToDb } from "../../utils/fierbase/fierbase.utils";

export function* orderSentToDb({payload}){
   
 try{
    yield call(addOrdersColectionToDb,'orders',payload)
    yield put(orderToDbSucces())


 }
 catch(error){
    yield put(orderToDbFaild(error))

 }

}






export function*onOrderSentToDB(){
    yield takeLatest(ORDER_TYPES.SET_ORDER_TO_COLLECTION_START,orderSentToDb)
  }
  export function*orderSagas(){
    yield all([call(onOrderSentToDB)])
    
  
  }