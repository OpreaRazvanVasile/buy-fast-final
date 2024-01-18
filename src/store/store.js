import { compose,applyMiddleware } from "redux";
import logger from "redux-logger";
import { createStore } from "redux";
import { rootReducer } from "./root-reducer"
import { persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


let middleware;

const persistConfig={
    key:'root',
    storage:storage,
    whitelist:['cart']
}

if(process.env.NODE_ENV==='development')middleware=[logger,thunk]
else  middleware=[thunk]

const composedEnhancers=composeWithDevTools(applyMiddleware(...middleware))
const persistRootReducer=persistReducer(persistConfig,rootReducer)

export const store=createStore(persistRootReducer,undefined,composedEnhancers)

export const persitor=persistStore(store);
