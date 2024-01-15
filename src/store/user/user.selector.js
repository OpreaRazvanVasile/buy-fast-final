import { createSelector } from "reselect"

export const selectCurrentUserReducer=state=>state.user
export const selectCurrentUser=createSelector(
    [selectCurrentUserReducer],//state.user if the value its  not change the value
    //(userSlice) will not UPDATE 
    //state.user Momoizated
    (userSlice)=>userSlice.currnetUser
)



