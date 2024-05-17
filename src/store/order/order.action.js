import { generatePath } from "react-router";
import { createAction } from "../../utils/fierbase/create.action";
import { ORDER_TYPES } from "./order.types";


export const setClientType=(typeClient)=>createAction(ORDER_TYPES.SET_CLIENT_TYPE,typeClient)
export const setPaymentType=(paymentType)=>createAction(ORDER_TYPES.SET_PAYMENT_TYPE,paymentType)
export const setOrderData=(dataObj)=>createAction(ORDER_TYPES.SET_ORDER_DATA,dataObj)
export const setProductsOrder=(productArray)=>createAction(ORDER_TYPES.SET_PRODUCTS,productArray)
export const setTotalInOrder=(value)=>createAction(ORDER_TYPES.SET_TOTAL,value)
export const setIsOrderSent=()=>createAction(ORDER_TYPES.SET_ORDER_SENT)
export const setOrderUID=(generateUID)=>createAction(ORDER_TYPES.SET_ORDER_UID,generateUID)
export const setClearTheOrderData=()=>createAction(ORDER_TYPES.SET_ORDER_CLEAR)
export const setOrderDate=(generateDate)=>createAction(ORDER_TYPES.SET_ORDER_DATE,generateDate)

export const setOrdersToColectionStart=(data)=>createAction(ORDER_TYPES.SET_ORDER_TO_COLLECTION_START,data)
export const orderToDbSucces=()=>createAction(ORDER_TYPES.SET_ORDER_TO_COLLECTION_SUCCES)
export const orderToDbFaild=(error)=>createAction(ORDER_TYPES.SET_ORDER_TO_COLLECTION_FAILD,error)
