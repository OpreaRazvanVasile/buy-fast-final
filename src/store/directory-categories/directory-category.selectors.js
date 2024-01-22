import { createSelector } from "reselect";

const directoryDataReducer=(state)=>state.directory_data

export const directoryCategoriesSelector=createSelector(
    [directoryDataReducer],
    (directoryDataSlice)=>directoryDataSlice.directoryData
)

export const directoryDataIsLoadingSelector=createSelector(
    [directoryDataReducer],
    (directoryDataSlice)=>directoryDataSlice.isLoading
)
export const directoryDataErrorSelector=createSelector(
    [directoryDataReducer],
    (directoryDataSlice)=>directoryDataSlice.error
)
