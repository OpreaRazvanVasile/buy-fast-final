import { takeLatest,put,call,all } from "redux-saga/effects";
import { signInSucces,signInFaild,signUpSucces,signUpFaild,signOutSucces,singOutFaild}from "./user.actions";
import { CURRENT_USER_TYPES } from "./user.types";
import { 
   createAuthWithEmail,
   getCurrentUser, 
   singInWithEmail ,
   createUsersDocument,
   signInWithGoogle,
   signOutUser
  } 
   from "../../utils/fierbase/fierbase.utils";


import { redirectSingIn } from "../../utils/fierbase/fierbase.utils";
import { getRedirectResult } from "firebase/auth";



export function*signInEmail(action){
     try{
      const currnetUser=yield call(getCurrentUser)
      if(currnetUser) return alert(`Log Out from current account`)
    
     const{payload:{email,password}} =action
 
       const {user}=yield call(singInWithEmail,email,password)
       yield call(getDocSnapShotFromAuth,user)
 
      // console.log(user)

     }
     catch(error){
      yield put(signInFaild(error))

     }
}
   

export function*getDocSnapShotFromAuth(userAuth,displayName){

    try{
 //{userAuth->dataBase AUTH OBJ}
 const userDocSnapShoot=yield call(createUsersDocument,userAuth,displayName)

// {dataBaseOBJAUTH}->{userOBJSNAPSHOOT}->.exist(),.data()->{user data}
 const userData={
     id:userDocSnapShoot.id,
     ...userDocSnapShoot.data(),//->DON`t return an user.id :()
 }
   yield put(signInSucces(userData))
  
    }

    catch(error){
    yield put(signInFaild(error))
    }


    
  


}

export function*signInGoogle(){
 
  try{
   const userFromAuth=yield call(getCurrentUser)
   if(userFromAuth)return alert(`you must log out of the current account`.toLocaleUpperCase())
   yield call(getDocSnapShotFromAuth)
  const googlePopUP=yield call(signInWithGoogle)
 
    const{user}=googlePopUP
     yield call(getDocSnapShotFromAuth,user)
    
      yield window.location.reload(false)

  
  }

  catch(error){
    yield put(signInFaild(error))

  }


}
export function*signInRedirect(){
  try{
    const userFromAuth=yield call(getCurrentUser);
    if(userFromAuth)return alert(`you must log out of the current account`.toLocaleUpperCase())

     yield call(redirectSingIn);
    const {user}=yield call(getRedirectResult); 
    console.log(user)
    yield call(getDocSnapShotFromAuth,user)
    
  
    
  }
 catch(error){
  yield put(signInFaild())
 }
}
export function*isUserAuthenticated(){
  try{
    const userAuth=yield call(getCurrentUser)

    if(!userAuth)return;
    yield call(getDocSnapShotFromAuth,userAuth)
   

  }
  catch(error){
   yield put(signInFaild(error))
   
  }
}




export function*signUp({payload:{email,password,displayName}}){
  try{
    const currnetUser= yield call(getCurrentUser)
    if(currnetUser) alert(`Log Out from the current account`)
    const response= yield call(createAuthWithEmail,email,password)
    yield put(signInSucces(response.user,displayName))
    yield call(getDocSnapShotFromAuth,response.user,displayName)
    // yield window.location.reload(false)
  }
  catch(error){
    yield put(signUpFaild(error))
 
  }
}


export function*signOut(){
  try{
    yield call(signOutUser)
   yield put(signOutSucces())
  }
  catch(error){
    yield put(singOutFaild(error))
  }
  
}

export function*onSignUpStart(){
  yield takeLatest(CURRENT_USER_TYPES.SIGN_UP_START,signUp)
}



export function*onSignOut(){
  yield takeLatest(CURRENT_USER_TYPES.SIGN_OUT_START,signOut)
}

export function*onlogInWithGoogle(){
  yield takeLatest(CURRENT_USER_TYPES.GOOGLE_SIGN_IN_POP_UP_START,signInGoogle)
}
export function*onlogInWithGoogleRedirect(){
  yield takeLatest(CURRENT_USER_TYPES.GOOGLE_SIGN_IN_REDIRECT,signInRedirect)
}

export function*onChechUserSession(){
    yield takeLatest(CURRENT_USER_TYPES.CHECH_USER_SESSION,isUserAuthenticated)
   
}
export function*onSignInWithPasswordAndEmail(){
  yield takeLatest(CURRENT_USER_TYPES.EMAIL_SIGN_IN_START,signInEmail)
}
export function*userSagas(){
  yield all([call(onChechUserSession),
    call(onlogInWithGoogle),
    call(onlogInWithGoogleRedirect),
    call(onSignInWithPasswordAndEmail),
  
    call(onSignUpStart),
    call(onSignOut)
    
  ])
  

}