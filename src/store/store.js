import { compose,applyMiddleware } from "redux";
import { createStore } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware=(store)=>(next)=>(action)=>{
    //ACTION {TYPE:'',PAYLOAD:{OBJECT}}
    if(!action.type){
        return next(action)
    }
    else{
        console.log(`TYPE : `,action.type);
        console.log('PAYLOAD: ',action.payload);
        console.log('CURRENT-STATE: ',store.getState());
        next(action)
        console.log('NEXT-STATE: ',store.getState())
    }

}
    

 const middleWares=[loggerMiddleware];
 const composedEnhancers=compose(applyMiddleware(...middleWares))
export const store=createStore(rootReducer,undefined,composedEnhancers)