
import { createSelector } from "reselect"

export const selectorCategoiresReducer=state=>state.categories_state

export const selectorCategoires=createSelector(
 
  [selectorCategoiresReducer],
  (categoriesSlice)=>categoriesSlice.categories
) 


export const selectorIsLoading=createSelector(
  [selectorCategoiresReducer],
  (categoriesSlice)=>categoriesSlice.isLoading
)

export const selectorError=createSelector(
  [selectorCategoiresReducer],
   (categoriesSlice)=>categoriesSlice.error
)