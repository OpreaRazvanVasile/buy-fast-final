import { compose,applyMiddleware } from "redux";
import logger from "redux-logger";
import { createStore } from "redux";
import { rootReducer } from "./root-reducer"
import { persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root-saga";
// import { thunk } from "redux-thunk";


let middleware;

const persistConfig={
    key:'root',
    storage:storage,
    whitelist:['cart']
}

const sagaMiddleware=createSagaMiddleware();
if(process.env.NODE_ENV==='development')middleware=[logger,sagaMiddleware]
else  middleware=[sagaMiddleware]

const composedEnhancers=compose(applyMiddleware(...middleware))
const persistRootReducer=persistReducer(persistConfig,rootReducer)

export const store=createStore(persistRootReducer,undefined,composedEnhancers)
sagaMiddleware.run(rootSaga)

export const persitor=persistStore(store);
