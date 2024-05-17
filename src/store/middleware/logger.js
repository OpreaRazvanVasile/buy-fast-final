export const loggerMiddleware=(store)=>(next)=>(action)=>{
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