import { createSelector } from "reselect"

export const selectorCategoiresReducer=state=>{

 return state.categories_state}

export const selectorCategoires=createSelector(
  [selectorCategoiresReducer],
  (categoriesSlice)=>categoriesSlice.categories
) 


export const selectorIsLoading=createSelector(
  [selectorCategoiresReducer],
  (categoriesSlice)=>categoriesSlice.isLoading
)