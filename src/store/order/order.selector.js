
import { createSelector } from "reselect"

const orderReducer=state=>state.order

export const isOrderSentSelector=createSelector(
    [orderReducer],
    (slice)=>slice.orderSent

)

export const orderDataReducer=createSelector(

    [orderReducer],
    (slice)=>slice.orderData
)



export const selectOrderClientType=createSelector(
    [orderDataReducer],
    (slice)=>slice.clientType
)

export const selectorOrderPaymentType=createSelector(
    [orderDataReducer],
    (slice)=>slice.paymentType
)
export const selectorOrderUID=createSelector(
    [orderDataReducer],
    (slice)=>slice.uid
)

export const selectorOrderDate=createSelector(
    [orderDataReducer],
    (slice)=>slice.date
)
