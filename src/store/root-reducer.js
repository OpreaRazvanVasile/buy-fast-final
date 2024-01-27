import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directoryCategoriesReducer } from "./directory-categories/directory-categories.reducer";
import { orderReducer } from "./order/order.reducer";
export const rootReducer=combineReducers({
    user:userReducer,
    categories_state:categoriesReducer,
    cart:cartReducer,
    directory_data:directoryCategoriesReducer,
    order:orderReducer,
    
})
