import { createSelector } from "reselect"

const cartItemsReducer=state=>state.cart

export const cartItemsSelector=createSelector(
    [cartItemsReducer],
    (cart)=>cart.cartItems
)

export const isCartOpenSelector=createSelector(
    [cartItemsReducer],
    (cartItems)=>cartItems.isCartOpen
)

export const cartTotalQunatitySelector=createSelector(
    [cartItemsSelector],
    (cartItems)=>cartItems.reduce((acc,item)=>acc+item.quantity,0)

)
export const cartTotalPriceSelector=createSelector(
    [cartItemsSelector],
    (cartItems)=>cartItems.reduce((acc,item)=>acc+(item.price*item.quantity),0)
)